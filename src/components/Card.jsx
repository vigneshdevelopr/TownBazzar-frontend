import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';

function Cards() {
    const CardClickDemo = () =>{
        alert('Hey Thanks for showing Intrest on my Product, Go to cart to checkout')
    }

const[data, setData]= useState([]);

useEffect(()=>{
  const products = async() =>{
    const response = await fetch('http://www.localhost:4000/products',{
      method: 'GET',
      body: JSON.stringify(),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const ProdData = await response.json();
    console.log(ProdData);
    setData(ProdData);
    
    }
    products();
},[])
console.log(data);


  return (
//     <div>

// {data.map((val,idx)=>(
//   <div key={val._id}>
//         <img src={val.image} />
//         <div>
//        {val.description}

//         </div>
//         <div>
//         <Button onClick={CardClickDemo} style={{display:'flex',fontWeight:'bold',backgroundColor:'#F7CA00',color:'#252525',width:'fit-content'}} variant='contained'>Buy</Button>
//         <Button onClick={CardClickDemo} style={{display:'flex',backgroundColor:'#ff0b0b',color:'#ffffff',fontWeight:'bold',width:'fit-content'}} variant='contained'>Add to Cart</Button>
//         </div>
   


//     </div>
// ))}


//     </div>
<MainCard>
  {data.map((val,idx)=>(
    <Card sx={{ maxWidth: 250,backgroundColor:'whitesmoke' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        sx={{width:"fit-content",display:'flex',margin:'0 auto'}}
        image={val.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <BTN>
        <Button className='buybtn'  size="small">Buy</Button>
        <Button className='cartbtn'  size="small">Add to Cart</Button>
        </BTN>
       
      </CardActions>
    </Card>
  ))}
</MainCard>

    
  )
}

export default Cards

const MainCard = styled.div`
display: grid;

grid-template-columns: repeat(auto-fit, minmax(295px, 2rem));
justify-content: space-evenly;
row-gap: 1cm;

.buybtn{
  background-color: #FA8900;
  color: #252525;
  font-weight: bold;
  &:hover{
    background-color: #FA8900;
  }
}
.cartbtn{
  background-color: #F7CA00;
  color: #252525;
  font-weight: bold;
  &:hover{
    background-color: #F7CA00;
  }
}

@media only screen and (max-width:765px) {
  display: grid;
grid-template-columns: repeat(2, minmax(50%, 2rem));
gap: 15px;
.cartbtn{
text-align: start;
}

}
`

const BTN = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;

`
