import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SingleProduct from "./SingleProduct/SingleProduct";
import Data from "./Data.json";
import "./Expolre.css";
import { Skeleton } from "@mui/material";
const Explore = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  

  return (
    <div className="product-container">
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
           
             
            
              
                {Data.map((pd) => (
                  <SingleProduct pd={pd} key={pd.id} />
                ))}
            
           
            ))
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Explore;
