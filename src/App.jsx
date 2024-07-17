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

  // Render the active section based on activeSection state
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return null; // Handle default case as needed
    }
  };

  // Determine the background gradient based on activeSection
  const getBackgroundColor = () => {
    switch (activeSection) {
      case 'about':
        return 'linear-gradient(45deg, #c44436 30%, #541d17 70%)'; // Example gradient for About section
      case 'experience':
        return 'linear-gradient(45deg, #6294be 30%, #244057 70%)'; // Example gradient for Experience section
      case 'contact':
        return 'linear-gradient(45deg, #aef74b 30%, #1a2c02 70%)'; // Example gradient for Contact section
      default:
        return 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 70%)'; // Default gradient
    }
  };

  return (
    <Box
      className="flow-background"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensure full viewport height
        backgroundImage: getBackgroundColor(),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center', // Center align text content
      }}
    >
      <Card sx={{ minWidth: '65%', maxWidth: '80%', borderRadius: 7 }}>
        <Header onSectionChange={handleSectionChange} activeSection={activeSection} />
        <Box sx={{ p: 4, maxHeight: 700, overflow: 'auto' }}>
          {renderActiveSection()}
        </Box>
      </Card>
    </Box>
  );
}

export default App;
