import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experience = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="projects" sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Software Engineer <i>@ Deloitte USI</i>
      </Typography>
      <Typography sx={{ color: "#98a16c" }} fontStyle={'oblique'} mb={1}>
        From Dec 2021 - Present
      </Typography>
      <Typography sx={{ color: "#0f112e" }} fontStyle={'oblique'} mb={2}>
        <b>Project 1 - Node JS Developer</b><br />
        Developed a chatbot using <b>NodeJS</b> within the Microsoft Teams application using the Bot Builder framework. Incorporated
        adaptive cards to display tabular data and designed a welcome page to enhance interactivity.<br /> 
        <br /><b>Project 2 - React JS Developer</b><br />Created multiple UI pages using ReactJS as per client requirement.<br />
        Created reusable components to reduce code duplication and ease future maintenance.<br />
        <br/><b>Project 3 - NodeJS Developer & Operate</b><br />
        Implemented a responsive design that allowed the application to be used across multiple devices with minimal
        modifications.<br />
        Implemented parallel execution logic to reduce processing time.<br />
        Developed new APIs to meet client requirements.<br />
        Identified and resolved bugs within the system.<br />
        Implemented new enhancements to the system.<br />
        Resolved bugs within the existing codebase.<br />
        Handled major incidents effectively, ensuring smooth delivery without any issues.<br />
        <br /><b>Project 4 - React Developer</b><br />
        Enhancing the present code for better reusability and performance
      </Typography>
      <Box sx={{ maxWidth: '500px', margin: '0 auto' }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ justifyContent: 'center' }}
          >
            <Typography sx={{ width: '100%', textAlign: 'center' }}>Frontend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>React JS</li>
              <li>JavaScript (ES6+)</li>
              <li>Next JS</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ justifyContent: 'center' }}
          >
            <Typography sx={{ width: '100%', textAlign: 'center' }}>Backend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Node JS</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Experience;
