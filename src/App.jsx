import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Hero, About, Experience, Skills, Contact } from './components/Sections';
import { profile } from './data';

const links = [['about', 'About'], ['experience', 'Experience'], ['skills', 'Skills'], ['contact', 'Contact']];

export default function App() {
  const [active, setActive] = useState('top');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const root = document.documentElement;
    const move = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...links.map(([id]) => id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="bg" aria-hidden="true" />
      <header className="nav">
        <a className="brand" href="#top">{profile.name}</a>
        <nav aria-label="Sections">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>
          ))}
          <a className="pill" href={profile.resume} target="_blank" rel="noreferrer">Open resume</a>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="foot">{profile.name} · built with React</footer>
    </>
  );
}
