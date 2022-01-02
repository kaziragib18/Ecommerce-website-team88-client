import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
const SingleProduct = (props) => {
  const { image, title, price, discount, discountPrice, rating,id } = props.pd;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Grid item xs={4} sm={4} md={4}>
     <Link style={{textDecoration:"none"}} to={`/productdetails/${id}`}>
     {loading ? (
        <Box sx={{ ml: 2 }}>
          <Skeleton variant="rectangular" width={315} height={350} />
        </Box>
      ) : (
        <Card sx={{ height: 350 }}>
          <CardContent>
            <CardMedia sx={{ textAlign: "center" }}>
              <img src={image} height="200" width="200" alt="" />
            </CardMedia>

            <Typography
              sx={{ fontSize: 14, fontWeight: 500 }}
              color=""
              gutterBottom
            >
              {title.substring(0, 32)}
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
              <Typography variant="h6">Price:$</Typography>
              <Typography
                style={{ textDecoration: "line-through" }}
                variant="h6"
              >
                {price}
              </Typography>
              <Typography
                sx={{ ml: ".5rem" }}
                style={{ color: "gray" }}
                variant="p"
              >
                {discount}%
              </Typography>

              <Typography sx={{ ml: "5rem" }} variant="h6">
                ${discountPrice}
              </Typography>
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      )}
     </Link>
    </Grid>
  );
};

export default SingleProduct;
