import React from 'react';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typography from "@material-ui/core/Typography";
import Box from '@mui/material/Box';

const Banner1 = () => {
    AOS.init();
    return (
        <div className="header-container ">
      
        <div className="header-img1">
          
            <div data-aos="fade-up">
            <h1 className="title">
            <Typography component="div" variant="h4">
            <Box sx={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Monospace' }}>
              <h1>The Best Look <br /> Anytime Anywhere</h1>
              </Box>
              </Typography>
            </h1>
    
        </div>
      </div>

    </div>
    );
};

export default Banner1;


