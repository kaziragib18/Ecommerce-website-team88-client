import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SingleProduct from "./SingleProduct/SingleProduct";
// import Data from "./Data.json";
import { TextField } from "@mui/material";
import NavBar from '../../Home/Shared/NavBar/NavBar'

const Explore = () => {
  const [searchpd, setSearchpd] = useState(" ");
  const[products, setProducts]=useState([])
  useEffect(()=>{
    fetch('https://cryptic-plains-35102.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])


  return (
    <>
      <NavBar />
      <div className="product-container">

        <Box sx={{ mt: 3 }}>
          <Container>
            <Box sx={{ textAlign: "center" }}>
              <TextField

                onChange={(e) => setSearchpd(e.target.value)}
                sx={{
                  width: 500,
                  maxWidth: '100%',
                }}
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Search Product.."

              />
            </Box>



            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {products.filter((val) => {
                if (searchpd === "") {
                  return val
                }

                else if (val.title.toLocaleLowerCase().includes(searchpd.toLocaleLowerCase())) {

                  return val

                }

              })
                .map((pd) => (
                  <SingleProduct pd={pd} key={pd.id} />
                ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </>

  );
};

export default Explore;
