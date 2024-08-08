import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import photo from '../assets/my_photo.jpg';
import '../index.css'; // Import your CSS file here

const About = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'left',
      margin: 'auto',
    }}>

      <Box sx={{ flex: 2, order: { xs: 2, md: 1 }, marginBottom: { xs: '1rem', md: 0 } }}>
        <Typography sx={{ color: "#98a16c" }} fontStyle={'oblique'} mb={1}>
          Software Developer
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem', margin: "3rem 0", color: "#495057" }}>
          Hello! My name is Dipendu Dey.
        </Typography>
        <Typography sx={{ color: "#0f112e", lineHeight: "2rem" }} fontStyle={'oblique'} mb={2}>
          Dynamic Software Engineer with a proven track record at Deloitte US, specializing in developing
          innovative solutions using NodeJS and ReactJS. Excelled in creating responsive designs and enhancing
          systems performance, significantly reducing processing times. Skilled in JavaScript and adept at
          mentoring junior developers, showcasing both technical prowess and leadership abilities.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, order: { xs: 1, md: 2 }, textAlign: 'center', display: 'grid', alignItems: 'center', justifyContent: 'center', marginLeft: "2vh", marginBottom: "1rem" }}>
        <div className="box" style={{ position: 'relative' }}>
          <Avatar
            alt="Profile"
            src={photo}
            sx={{ width: 250, height: 250 }}
          />
          <div className="overlay"></div>
        </div>
      </Box>
    </Box >
  );
};

export default About;
