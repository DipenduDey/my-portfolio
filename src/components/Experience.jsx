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
    <Box id="projects" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: "#495057" }}>
        Software Engineer <i>@ Deloitte USI</i>
      </Typography>

      <Typography sx={{ color: "#98a16c" }} fontStyle={'oblique'} mb={1}>
        From Dec 2021 - Present
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        margin: 'auto',
        gap: "1rem",
      }}>
        <Box sx={{ flex: 2, order: { xs: 1, md: 2 }, marginBottom: { xs: '1rem', md: 0 } }}>
          <Typography sx={{ color: "#0f112e", textAlign: "left", lineHeight: "2rem" }} fontStyle={'oblique'} mb={2}>
            <ul>
              <li> Developed chatbot using NodeJS in the Microsoft Teams application using the Bot Builder framework.</li>
              <li> Designed and developed multiple user interface pages using ReactJS, tailoring each component to meet the client's specific requirements and delivering a seamless user experience.</li>
              <li> Handled major incidents effectively, ensuring smooth delivery without any issues.</li>
              <li> Designed and coded new software or modified existing software to add new features.</li>
              <li> Optimized code for better performance, scalability, reliability, security, and maintainability.</li>
              <li> Performed debugging tasks to identify root cause of errors or malfunctions in existing systems.</li>
              <li> Collaborated with project stakeholders to ensure successful delivery of software solutions.</li>
              <li> Identified and documented potential software risks, proposing solutions and mitigation strategies to maintain system security.</li>
              <li> Debugged and resolved software issues efficiently, minimizing downtime and ensuring application stability.</li>
              <li> Adapted to new technologies and project requirements quickly, demonstrating strong learning and problem- solving skills.</li>
              <li> Trained users to use new or modified equipment.</li>
            </ul>
          </Typography>
        </Box>
        <Box sx={{ margin: '0 auto', flex: 1, order: { xs: 2, md: 2 } }}>
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
              <Typography sx={{ textAlign: "center" }}>
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
              <Typography sx={{ textAlign: "center" }}>
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
              <Typography sx={{ textAlign: "center" }}>
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
              <Typography sx={{ textAlign: "center" }}>
                GitHub Desktop, Git Bash, GitHub, Bitbucket, Kibana, New Relic, JIRA, Service Now, Postman
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <p><b>
        **For more details please refer to my RESUME**
      </b></p>
    </Box>
  );
};

export default Experience;
