import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body1" color="textSecondary" align="center">
          © 2023 Tu Compañía. Todos los derechos reservados.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
