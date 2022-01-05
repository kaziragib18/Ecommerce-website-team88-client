import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Data from "../Data.json";
import { Rating, Stack } from "@mui/material";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import "./Productdetails.css";
import NavBar from "../../Shared/NavBar/NavBar";

const ProductDetails = () => {
  const { productid } = useParams();
  const[newProducts, setNewProduct]=useState([]);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  
  
  useEffect(()=>{
    fetch('https://cryptic-plains-35102.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setNewProduct(data))
    console.log(newProducts)
    
},[])
console.log(productid)
  // const allproduct = Data;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    const selectedProduct = newProducts.find(
      (pd) => pd._id ===(productid)
    );
    setProduct(selectedProduct);
    console.log(selectedProduct);
  }, [newProducts]);

  const decriment = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  console.log(product)
 
 
  const Loading = () => {
    return (
      <>
        <div className="col-md-6 my-5">
          <Skeleton className="" height={400} />
        </div>
        <div className="col-md-6 my-5" style={{ lineHeight: 2 }}>
          <Skeleton width={300} height={50} />
          <Skeleton height={75} />
          <Skeleton width={150} height={25} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <div className="d-flex">
            <Skeleton width={100} height={50} />
            <Skeleton style={{ marginLeft: 6 }} width={100} height={50} />
          </div>
        </div>
      </>
    );
  };
  const Allproducts = () => {
    return (
      <>
        <div className="col-md-6 my-5">
          <img
            className=""
            height="300px"
            width="350px"
           src={product.image}
            alt={product.title}
          />
        </div>
        <div className="col-md-6 my-5">
          <h4 className="text-uppercase text-dark-50 ">{product.category}</h4>
          <h1 className="display-7"></h1>
          <p className="lead">
            Rating:{product.rating?.rate}
            <Stack spacing={1}>
              <Rating 
                name="half-rating-read"
                defaultValue={product.rating?.rate}
                precision={0.5}
                readOnly
              />
            </Stack>
          </p>
          <div>
            <span>Price:</span>
            <span className="text-decoration-line-through">
              {currencyFormatter.format(product.price, { code: "USD" })}
            </span>
          </div>
          <h3 className="display-6 fw-bold">
            {currencyFormatter.format(product.discountPrice, { code: "USD" })}
          </h3>
          <p className="lead">{product.description?.substring(0, 120)}</p>
          <div className="dec_in_quantity">
            <span onClick={decriment} className="dec">
              <BsDash />
            </span>
            <span className="quantity">{quantity}</span>
            <span onClick={() => setQuantity(quantity + 1)} className="inc">
              <BsPlus />
            </span>
          </div>
          <button className="btn1 me-2">Add to Cart</button>
          <Link to="/cart">
            <button className=" btn2 me-2">Check Your Cart</button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <Allproducts />}</div>
      </div>
    </>
  );
};

export default ProductDetails;

// onClick={() =>

//     dispatch({ type: "ADD_TO_CART", payload: { product, quantity },

//   },
//   handleaddtocart()
//     )
//   }
