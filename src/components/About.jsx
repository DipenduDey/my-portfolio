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
      flexDirection: { xs: 'column', md: 'row' }, // Column layout on mobile, row layout on medium and larger screens
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'left', // Adjust text alignment as needed
      p: 4,
      maxWidth: '800px', // Adjust the maximum width as needed
      margin: 'auto', // Center align horizontally
    }}>
      <Box sx={{ flex: 1, order: { xs: 2, md: 1 }, marginBottom: { xs: '1rem', md: 0 } }}>
        <Typography sx={{ color: "#98a16c" }} fontStyle={'oblique'} mb={1}>
          Software Engineer
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Hello! my name is Dipendu Dey.
        </Typography>
        <Typography sx={{ color: "#0f112e" }} fontStyle={'oblique'} mb={2}>
          I bring extensive experience as a Node.js and React developer, having delivered numerous successful projects and innovative solutions. Proficient in Node.js, JavaScript, MongoDB, and React.js, I excel in problem-solving and maintain a meticulous coding approach. With a background enriched by valuable contributions at Deloitte USI, I am dedicated to further refining my Node.js and React.js skills and making impactful contributions to the growth and prosperity of an ambitious organization.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, order: { xs: 1, md: 2 }, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: "2vh" }}>
        <div className="box" style={{ position: 'relative' }}>
          <Avatar
            alt="Profile"
            src={photo}
            sx={{ width: 250, height: 250 }}
          />
          <div className="overlay"></div>
        </div>
      </Box>
    </Box>
  );
};

export default About;
