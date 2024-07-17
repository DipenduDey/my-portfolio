// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Adjust primary color
    },
    secondary: {
      main: '#ff4081', // Adjust secondary color
    },
    background: {
      default: '#121212', // Main background color
      paper: '#1e1e1e', // Card/section background color
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#b0bec5', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Adjust button styling
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
