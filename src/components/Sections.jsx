import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { profile, words, stats, experience, skills, certs, education } from '../data';
import photo from '../assets/my_photo.jpg';

function useSeen(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') { setSeen(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return seen;
}

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const seen = useSeen(ref);
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return undefined;
    if (reduce || to === 0) { setN(to); return undefined; }
    let raf; let t0;
    const step = (t) => {
      t0 = t0 || t;
      const p = Math.min((t - t0) / 1200, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, reduce]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (reduce) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);
  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -14, y: ((e.clientX - r.left) / r.width - 0.5) * 14 });
  };
  return (
    <section id="top" className="hero wrap">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
        <motion.p variants={item} className="kicker">{profile.title}</motion.p>
        <motion.h1 variants={item}>
          I build <span className="swap" key={words[i]}>{words[i]}</span>
        </motion.h1>
        <motion.p variants={item} className="lead">{profile.lead}</motion.p>
        <motion.div variants={item} className="cta">
          <a className="btn primary" href="#experience">See my experience</a>
          <a className="btn" href="#contact">Get in touch</a>
        </motion.div>
      </motion.div>
      <motion.div
        className="photo"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        onPointerMove={onMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <img src={photo} alt="Dipendu Dey" />
        <span className="badge">Atos · React & Node.js</span>
      </motion.div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="wrap sec">
      <h2>About</h2>
      <div className="about">
        <div className="prose">{profile.summary.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong><Counter to={s.to} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Job({ job, startOpen }) {
  const [open, setOpen] = useState(startOpen);
  const head = job.bullets.slice(0, 3);
  const rest = job.bullets.slice(3);
  return (
    <article className="job">
      <span className="node" />
      <div className="job-top">
        <h3>{job.role} <em>at {job.company}</em></h3>
        <p className="when">{job.period}{job.note ? ` · ${job.note}` : ''}</p>
      </div>
      <ul>{head.map((b) => <li key={b}>{b}</li>)}</ul>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} style={{ overflow: 'hidden' }} aria-hidden={!open}>
        <ul>{rest.map((b) => <li key={b}>{b}</li>)}</ul>
      </motion.div>
      {rest.length > 0 && (
        <button className="more" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? 'Show less' : `Show ${rest.length} more`}
        </button>
      )}
      <div className="chips">{job.stack.map((s) => <span key={s}>{s}</span>)}</div>
    </article>
  );
}

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });
  return (
    <section id="experience" className="wrap sec">
      <h2>Experience</h2>
      <div className="timeline" ref={ref}>
        <span className="rail" />
        <motion.span className="rail fill" style={{ scaleY: fill }} />
        {experience.map((job, idx) => <Job key={job.company} job={job} startOpen={idx === 0} />)}
      </div>
    </section>
  );
}

export function Skills() {
  const groups = Object.keys(skills);
  const [group, setGroup] = useState('All');
  const shown = group === 'All' ? groups.flatMap((g) => skills[g]) : skills[group];
  return (
    <section id="skills" className="wrap sec">
      <h2>Skills</h2>
      <div className="tabs" role="tablist">
        {['All', ...groups].map((g) => (
          <button key={g} role="tab" aria-selected={group === g} className={group === g ? 'on' : ''} onClick={() => setGroup(g)}>{g}</button>
        ))}
      </div>
      <div className="skillgrid" key={group}>
        {shown.map((s, n) => (
          <motion.span key={s} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: n * 0.03 }}>{s}</motion.span>
        ))}
      </div>
      <div className="two">
        <div className="panel">
          <h3>Education</h3>
          <p><b>{education.degree}</b></p>
          <p>{education.school}</p>
          <p className="when">{education.period}</p>
        </div>
        <div className="panel">
          <h3>Certifications</h3>
          <ul>{certs.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="wrap sec contact">
      <h2>Contact</h2>
      <p className="lead">Got a project, a role, or a bug that will not die? My inbox is open.</p>
      <div className="cta">
        <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
      </div>
    </section>
  );
}
