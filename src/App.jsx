import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (activeSection) {
      case 'about':
        return 'linear-gradient(45deg, #c44436 30%, #541d17 70%)';
      case 'experience':
        return 'linear-gradient(45deg, #6294be 30%, #244057 70%)';
      case 'contact':
        return 'linear-gradient(45deg, #aef74b 30%, #1a2c02 70%)';
      default:
        return 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 70%)';
    }
  };

  return (
    <Box>
      <Box
        id="DemoGradient"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: getBackgroundColor(),
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          textAlign: 'center'

        }}
      >
        <Card className="cardDetails" sx={{ borderRadius: "1rem" }}>
          <Header onSectionChange={handleSectionChange} activeSection={activeSection} />
          <Box
            sx={{
              p: 4,
              maxHeight: 700,
              overflow: 'auto',
            }}
          >
            {renderActiveSection()}
          </Box>
        </Card>
      </Box>
    </Box >
  );
}

export default App;