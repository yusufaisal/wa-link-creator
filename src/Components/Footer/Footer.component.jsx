import * as React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: '#eeeeee',  // Updated background color
        color: '#0B132B', // Adjusted text color for better contrast
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ color: '#0B132B' }}>
              LinkDev
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', marginBottom: 2 }}>
              Delivering digital transformation solutions that create value, accelerate innovation, and empower businesses globally.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              <Link href="#" underline="hover" color="inherit">
                Terms & Conditions
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              <Link href="#" underline="hover" color="inherit">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>

          {/* Social Media and Language Links Section */}
          <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" gutterBottom sx={{ color: '#0B132B' }}>
              Follow Us
            </Typography>
            <Box>
              {/* Language Icon */}
              <IconButton
                aria-label="Website"
                color="inherit"
                href="http://linkdev.org"
                target="_blank"
                sx={{ '&:hover': { color: 'secondary.main' }, color: '#0B132B' }}
              >
                <LanguageIcon />
              </IconButton>

              {/* Instagram Icon */}
              <IconButton
                aria-label="Instagram"
                color="inherit"
                href="https://www.instagram.com/yusufaisal9/"
                target="_blank"
                sx={{ '&:hover': { color: 'secondary.main' }, color: '#0B132B' }}
              >
                <InstagramIcon />
              </IconButton>

              {/* LinkedIn Icon */}
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                href="https://www.linkedin.com/in/yusufaisal/"
                target="_blank"
                sx={{ '&:hover': { color: 'secondary.main' }, color: '#0B132B' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 3, backgroundColor: 'rgba(0,0,0,0.1)' }} />

        {/* Footer Bottom Section */}
        <Box textAlign="center">
          <Typography variant="body2" sx={{ color: '#555' }}>
            &copy; {new Date().getFullYear()} LinkDev. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
