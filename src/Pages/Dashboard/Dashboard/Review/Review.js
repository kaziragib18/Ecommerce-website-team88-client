import { Button, Container, Grid, InputBase, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Review.css'
export default function Review() {
    const handleChange = (e) => {


        // const reviewValue = e.target.value
        // const userName = user?.displayName
        // const userEmail = user?.email
        // const formValue = { userName, userEmail, reviewValue }
        // setReview(formValue)

        e.preventDefault()
    }
    return (
     < >
        <div className='bg' >
       
        <Grid item xs={10} md={8}   >
          <Box sx={{display:'flex', justifyContent:'space-around',m:5,bgcolor:'#282828'}}  p={2} borderRadius={16} boxShadow={2} border={3}>
            <Box sx={{mt:2}}>
            <form className='form'  >
                <Typography  sx={{ width: '100%', padding: '10px', margin: "auto", borderRadius: '10px', color: '##F1E8E0' }} variant="h4" gutterBottom component="div">
                    Give your opinion
                </Typography>
                <InputBase
                    // onChange={handleChange} 
                    style={{ width: '75%', border: '1px solid wheat', color: 'white', margin: '10px' }}
                  
                    name='name'
                    type='text'
                    variant="standard" />
                <InputBase
                    // onChange={handleChange} 
                    style={{ width: '75%', border: '1px solid wheat', color: 'white', margin: '10px' }}
                 
                    name='email'
                    type='email'
                    variant="standard" />

                <InputBase
                    onChange={handleChange}
                    name='comment'
                    type='text'
                    style={{ width: '75%', border: '3px solid wheat', borderRadius: '10px', margin: '10px',color:'white' }}

                    label="Review Box"
                    multiline
                    rows={10}
                    placeholder="Give your opinion"
                />
                <Button type='submit'
                    sx={{ width: 'auto', padding: '10px', margin: "10px", background: '#e23801', color: 'white' }}
                >
                    Submit Review
                </Button>
            </form>
            </Box>
            <Box className="img">
                <img  src="https://i.ibb.co/xgs8MSW/istockphoto-1277188775-170667a-removebg-preview.png" alt="" />
               
            </Box>
            
            </Box>
          
          </Grid>
          <img className='img ' style={{width:'75%',height:'50%'}} src="https://i.ibb.co/BKMRB3g/tiny-female-customer-reading-book-with-good-feedback-research-analysis-book-service-from-girl-flat-v.png" alt="tiny-female-customer-reading-book-with-good-feedback-research-analysis-book-service-from-girl-flat-v" alt="" /> 

    </div>
   
  </>
    )
}
