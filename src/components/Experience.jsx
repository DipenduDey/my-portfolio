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
      <Typography sx={{ color: "#0f112e", textAlign: "left" }} fontStyle={'oblique'} mb={2}>
        <ul>
          <li>Developed a chatbot in Microsoft teams using <b>NodeJS</b> the Bot Builder framework. Incorporated adaptive cards to display tabular data and designed a welcome page to enhance interactivity.</li>
          <li>Created multiple UI pages using <b>ReactJS</b> as per client requirement.</li>
          <li>Created reusable components to reduce code duplication and ease future maintenance.</li>
          <li>Implemented a responsive design that allowed the application to be used across multiple devices with minimal modifications.</li>
          <li>Implemented parallel execution logic to reduce processing time.</li>
          <li>Developed new APIs to meet client requirements.</li>
          <li>Identified and resolved bugs within the system.</li>
          <li>Implemented new enhancements to the system.</li>
          <li>Resolved bugs within the existing codebase.</li>
          <li>Handled major incidents effectively, ensuring smooth delivery without any issues.</li>
          <li>Enhancing the present code for better reusability and performance</li>
        </ul>
      </Typography>
      <Box sx={{ maxWidth: '500px', margin: '0 auto' }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ justifyContent: 'center' }}
          >
            <Typography sx={{ width: '100%', textAlign: 'center' }}>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              JavaScript, Python
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ justifyContent: 'center' }}
          >
            <Typography sx={{ width: '100%', textAlign: 'center' }}>Frameworks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ReactJS, NodeJS, ExpressJS, NextJS, MongoDB, Django
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{ justifyContent: 'center' }}
          >
            <Typography sx={{ width: '100%', textAlign: 'center' }}>Infrastructures</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Docker, Kubernetes, Jenkins, Elastic Search
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
            sx={{ justifyContent: 'center' }}
          >
            <Typography sx={{ width: '100%', textAlign: 'center' }}>Development Tools Used</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              GitHub Desktop, Git Bash, GitHub, Bitbucket, Kibana, New Relic
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Experience;
