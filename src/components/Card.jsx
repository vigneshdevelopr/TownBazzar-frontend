import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
  Button,

} from "@mui/material";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../Reducer/CartReducer";




function Media() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://townbazzar.vercel.app/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const prodData = await response.json();
        console.log(prodData);
        setData(prodData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Grid container spacing={3}>
      {loading || data.length === 0
        ? Array.from(new Array(8)).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Skeleton variant="rectangular" width="100%" height={320} />
            </Grid>
          ))
        : data.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <StyledCard>
                <CardMedia
                  component="img"
                  alt="product"
                  height="230"
                  style={{width:'200px',margin:'0 auto'}}
                  image={item.image}
                  
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" style={{color:'#252525',fontWeight:'bold',fontSize:'large'}}>
                   PRICE: Rs:{item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Rating: {item.rating[0].rate}/5
                  </Typography>
                </CardContent>
                <CardActions>
                  <StyledButton className="buybtn" size="small">
                    Buy
                  </StyledButton>
                  <StyledButton onClick={() => {dispatch(addToCart(item));alert('Products Added Successfully')}} className="cartbtn" size="small">
                    Add to Cart
                  </StyledButton>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
    </Grid>
  );
}

function Cards() {
  return (
    <Container>
        <Media />
    </Container>
  );
}

export default Cards;

const Container = styled.div`
  display: flex;
  justify-content: center;
width: 100% !important;
`;

const StyledCard = styled(Card)`
background-color: whitesmoke !important;
  height: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  -webkit-box-shadow: 4px 17px 18px -2px rgba(0,0,0,0.68) !important;
-moz-box-shadow: 4px 17px 18px -2px rgba(0,0,0,0.68) !important;
box-shadow: 4px 17px 18px -2px rgba(0,0,0,0.68) !important;

`;

const StyledButton = styled(Button)`
display: flex !important;
margin: 0 auto !important;
  background-color: #252525 !important;
  color: #ffffff !important;
  font-weight: bold;
  &:hover {
    background-color: whitesmoke !important;
    color: #252525 !important;
    cursor: pointer;
  }
`;
