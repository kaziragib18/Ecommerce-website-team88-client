import React from 'react';
import { Container, Grid } from '@mui/material';
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='subscribe'>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className='subscribe-box'>
              <div className="subscribe-content">
                <h2>Our Newsletter</h2>
                <h1 className="text-size fw-bold">SUBSCRIBE & GET 10% OFF</h1>
                <p style={{ color: 'lightgray' }}>Get updated on every new offers on our new product and sales discounts. We can also provide online purchase delivery all over the country. </p>
              </div>
              <div className='subscribe-form'>
                <form>
                  <input type="email" placeholder='Your Email' />
                  <button className='subscribe-btn'>Subscribe</button>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewsLetter;