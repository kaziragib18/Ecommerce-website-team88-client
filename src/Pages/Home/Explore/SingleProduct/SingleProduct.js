import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { typography } from "@mui/system";

const SingleProduct = (props) => {
  const { image, title, price, discount, discountPrice, rating } = props.pd;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, height: 350 }}>
        <CardContent>
          <CardMedia sx={{ textAlign: "center" }}>
            <img src={image} height="200" width="200" alt="" />
          </CardMedia>

          <Typography
            sx={{ fontSize: 14, fontWeight: 500 }}
            color=""
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={rating.rate}
              precision={0.5}
              readOnly
            />
          </Stack>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">
             Price:$
            </Typography>
          <Typography style={{ textDecoration: "line-through" }} variant="h6">
              {price}
            </Typography>
            <Typography
              sx={{ ml: ".5rem" }}
              style={{ color: "gray" }}
              variant="p"
            >
              {discount}%
            </Typography>
           
              <Typography  sx={{ ml:"3rem" }} variant="h6">${discountPrice}</Typography>
            
          </Box>
          
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
