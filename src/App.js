import './App.css';
import Header from './components/Header';
import ResponsiveAppBar from './components/Navbar';
import ValueProposotion from './components/ValueProposotion';
import Products from './components/Products';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Footer from './components/Footer';


export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2e7d32',
      light: '#1b5e20',
      dark: '#2fc735',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#558b2f',
      light: '#558b2f',
      dark: '#558b2f',
    },
    text: {
      secondary: '#f5f5f5',
      disabled: '#fafafa',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '7rem',
    },
  },
});


function App() {
  return (
    <>
    <ThemeProvider theme={themeOptions}>
        <ResponsiveAppBar/>
        <Header />
        <ValueProposotion />
        <Products/>
        <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
