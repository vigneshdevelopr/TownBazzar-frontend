import { Button } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'

function Card() {
    const CardClickDemo = () =>{
        alert('Hey Thanks for showing Intrest on my Product, Go to cart to checkout')
    }
  return (
    <MainCard>
        <Image src='https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <Description>
        Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1

        </Description>
        <Main>
        <Button onClick={CardClickDemo} style={{display:'flex',fontWeight:'bold',backgroundColor:'#F7CA00',color:'#252525',width:'fit-content'}} variant='contained'>Buy</Button>
        <Button onClick={CardClickDemo} style={{display:'flex',backgroundColor:'#ff0b0b',color:'#ffffff',fontWeight:'bold',width:'fit-content'}} variant='contained'>Add to Cart</Button>
        </Main>
   


    </MainCard>
  )
}

export default Card

const MainCard = styled.div`
border: 1px solid red;
border-radius: 9px;

display: flex;
flex-direction: column;
@media only screen and (max-width: 768px)  {
   width: 10rem;
margin-right: 10px;
column-gap: 1cm; 
}


`

const Image = styled.img`
width: 100%;
`
const Description = styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px;
font-size: large;
color: black;
`

const Main = styled.div`

display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
margin:0 auto ;
@media only screen and (max-width: 768px) {
display: flex;

}

`