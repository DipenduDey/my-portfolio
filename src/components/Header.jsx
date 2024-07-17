import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = ({ onSectionChange, activeSection }) => {
  const handleSectionClick = (section) => {
    onSectionChange(section); // Call the function passed from App.js
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/16SMpW4bxEf36lrs8s8r-Ph3qnRR05Ou6/view?usp=drive_link', '_blank'); // Replace with your Google Drive link
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: 'none', color: 'black' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Button color="inherit" onClick={() => handleSectionClick('about')} >
            <Typography sx={{ color: activeSection === 'about' ? 'red' : 'inherit' }}>About</Typography>
          </Button>
          <Button color="inherit" onClick={() => handleSectionClick('experience')}>
            <Typography sx={{ color: activeSection === 'experience' ? 'lightblue' : 'inherit' }}>Experience</Typography>
          </Button>
          <Button color="inherit" onClick={() => handleSectionClick('contact')}>
            <Typography sx={{ color: activeSection === 'contact' ? 'lightgreen' : 'inherit' }}>Contact</Typography>
          </Button>
          <Button color="inherit" variant="outlined" onClick={handleResumeClick}>
            <Typography sx={{ color: 'inherit' }}>Resume</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
