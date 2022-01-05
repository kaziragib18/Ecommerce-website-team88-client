import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// import Data from "./Data.json";
import Singlefeaturesproduct from "./Singlefeaturesproduct";

const FeaturesProducts = () => {
  const[products, setProducts]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])


  return (
    <>
      
      <div className="product-container my-5">
        <h1 className="text-center">FEATURES PRODUCTS</h1>
        <Box sx={{ mt: 3 }}>
          <Container>
           


            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {products.slice(0,7)
                .map((pd) => (
                  <Singlefeaturesproduct pd={pd} key={pd.id} />
                ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </>

  );
};

export default FeaturesProducts;
