import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:dipendudey9835@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/dipendu-dey-a81466166/', '_blank');
  };

  return (
    <Box id="contact" sx={{ p: 4, textAlign: 'center', lineHeight: "5rem" }}>
      <Typography variant="h4" component="div" gutterBottom sx={{ marginBottom: "2rem", color: "#495057" }}>
        <b>Get In Touch!</b>
      </Typography>
      <Typography sx={{ color: "#0f112e" }} fontStyle={'oblique'} mb={2}>
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </Typography>
      <Box sx={{ mt: 2, display: 'inline-flex', flexWrap: "wrap" }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleEmailClick}>
          Email
        </Button>
        <Button variant="contained" color="secondary" onClick={handleLinkedInClick}>
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
