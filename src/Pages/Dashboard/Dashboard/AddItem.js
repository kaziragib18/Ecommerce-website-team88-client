import { Box, Button, Container, Grid, Input, Paper, TextField, Typography } from '@mui/material';
// import { width } from '@mui/system';
import React, { useState } from 'react';
export default function AddItem() {
    const [product, setProduct] = useState({})
    console.log('product/.....', product)
    const addProductBgUrl = 'https://i.ibb.co/t3cGNQK/plain-dark-blue-fabric-textured-background-53876-129743.jpg'
    const addProductBg = {
      background: `url(${addProductBgUrl})`
    }
    const handleOnBlur = e => {
      const field = e.target.name
      const value = e.target.value
      const newProductData = { ...product }
      newProductData[field] = value
      setProduct(newProductData)
      console.log(newProductData)
  
    }
    return (
        <div >
        <Container >
        <Grid sx={{ margin: '10px' }} container spacing={2}>
          <Grid item xs={12} md={10}>
          <Box sx={{display:'flex', justifyContent:'space-around'}} p={2} borderRadius={16} boxShadow={3}>
            <Box width="75%">
            <form  >
                <Typography className="style" sx={{ padding: '10px', margin: "10px", color: '#020202' }} variant="h4" gutterBottom component="div">
                  Add New Product
                </Typography>
                <TextField
                  style={{ width: '75%', margin: '10px' }}
                  label="item name"
                  variant="outlined"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <TextField
                  style={{ width: '75%', margin: '10px' }}
                  label="describtion"
                  variant="outlined"
                  name="description"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <TextField
                  style={{ width: '75%', margin: '10px' }}
                  label="price"
                  variant="outlined"
                  name="price"
                  type="number"
                  onBlur={handleOnBlur}
                />
                <Input
        accept="image/*"
        type="file"
        onChange={e=>console.log(e.target.files[0])}
      />
      <br />
                <Button style={{ margin: '10px', backgroundColor: '#020202' }} type="submit" variant="contained">Add Product</Button>
              </form>
            </Box>
            <Box bgcolor='#020202' width="50%" borderRadius={16} boxShadow={3}>
                <h1 style={{color:'#e46815', fontFamily:'cursive'}}>Item Selection</h1>
                <ul style={{textAlign:'start',color: '#fff',paddingtop: '20px',paddingbottom:'20px',marginLeft:'10px',marginRight:'10px'}}>
                    <li>Solve a customer pain point</li>
                    <li>Appeal to enthusiastic hobbyists</li>
                    <li>Go with your personal passion</li>
                    <li>Consider your professional experience</li>
                    <li>Capitalize on trends early</li>
                    <li>Read customer reviews on existing products</li>
                    <li>Find product opportunities in keywords</li>
                    <li>Browse what’s trending on online marketplaces</li>
                    <li>Research products with higher profit margins</li>
                    <li>Start your search with related products</li>
                    <li>Always be on the lookout</li>

                </ul>
            </Box>
            </Box>
          
          </Grid>
  
        </Grid>
      </Container>
      </div>
    )
}
