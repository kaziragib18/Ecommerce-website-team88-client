import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Data from '../Data.json'
import { CardMedia, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ProductDetails = () => {
    const { productid } = useParams()
    const [product, setProduct] = useState({})
    const { id, image, title, category, price, rating } = product
    const allproduct = Data
    useEffect(() => {
        const selectedProduct = allproduct.find(pd => pd.id === parseInt(productid))
        setProduct(selectedProduct)
        console.log(product);


    }, [product])
    return (
        <>
            <h1>this product details</h1>
           <Container>
           <Grid container >
                <Grid item xs={12} md={5} lg={6}>
                    <CardMedia>

                        <img width="350" height="350" src={image} alt="" />
                    </CardMedia>
                </Grid>
                <Grid item xs={12} md={7}  lg={6}>
                <Box>
                <Typography variant='h5'>
                {category}
                 </Typography>
                 <Typography variant='h5'>
                     {title}
                 </Typography>
                </Box>
                 
                </Grid>

            </Grid>
           </Container>
        </>
    );
};

export default ProductDetails;