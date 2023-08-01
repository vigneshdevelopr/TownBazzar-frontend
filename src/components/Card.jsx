import React from 'react'
import { styled } from 'styled-components'

function Card() {
  return (
    <MainCard>
        <Image src='https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <Description>
        Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1
13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came
16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color
5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase
        </Description>
    <Main>Card</Main>

    </MainCard>
  )
}

export default Card

const MainCard = styled.div`
border: 1px solid red;
border-radius: 9px;

`
const Image = styled.img`
width: 100%;
`
const Description = styled.div`

`

const Main = styled.div`
margin:3cm ;
@media only screen and (max-width: 768px) {
margin: 0cm !important;
}

`