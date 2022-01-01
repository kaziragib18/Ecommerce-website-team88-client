import React from 'react';
import './Banner2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typography from "@material-ui/core/Typography";
import Box from '@mui/material/Box';

const Banner2 = () => {
  AOS.init();
    return (
      <div className="header-container ">
      
      <div className="header-img2">
        
          <div data-aos="fade-up">
          <h1 className="title">
          <Typography component="div" variant="h4">
          <Box sx={{ textAlign: 'right', fontWeight: 'bold', fontFamily: 'Monospace' }}>
            <h1>Discover<br /> your favorite place</h1>
            </Box>
            </Typography>
          </h1>
  
      </div>
    </div>

  </div>
    );
};

export default Banner2;