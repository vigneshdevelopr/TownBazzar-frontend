import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Base from '../components/Base';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Base>
    <div className="cart">
      <h2>Cart</h2>
      <div>
        {cartItems.map((item, index) => (
        //   <li key={index}>{item.title} - ${item.price}</li>
        <Card key={index} sx={{ maxWidth: 245,maxHeight: 500 }}>
        <CardMedia
        component='img'
height="180"
style={{width:'200px',margin:'0 auto'}}
image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{backgroundColor:'lightgreen',color:'#252525'}} variant='contained' size="small">Buy Now</Button>
          <Button style={{backgroundColor:'red'}}  variant='contained' size="small">Remove</Button>
        </CardActions>
      </Card>
        ))}
      </div>
    </div>
    </Base>
    
  );
};

export default CartPage;
