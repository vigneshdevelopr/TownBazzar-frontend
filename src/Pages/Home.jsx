import React from 'react'

import Base from '../components/Base'
import Banner from '../components/Banner'
import { styled } from 'styled-components'
import Card from '../components/Card'

function Home() {
  return (

<Base>
<MainHome>


<Banner />
<Division>Welcome to Town Bazzar     </Division>

<Cards>

<Card />


</Cards>
</MainHome>

</Base>
   
  )
}

export default Home
const MainHome = styled.div`
  width: 100%;
  position: relative;
  background-image: linear-gradient(to bottom, #F4E2CC, #ffffff);
`
const Division = styled.div`
position: relative;
padding-top: 8cm;
text-align: center;
font-size: x-large;
font-weight: bold;

@media only screen and (max-width: 768px) {
  position: relative;
padding-top: 3cm;
text-align: center;
font-size: x-large;
font-weight: bold;
}
`

const Cards = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column !important;
  margin: 0 auto !important;

  
 
`
// const Main = styled.div`
// position: relative;

//   border: 2px solid black;
//   margin: 1rem;
//   display: flex;
//   flex-wrap: wrap;
//   /* justify-content: space-evenly; */
  
//   @media only screen and (max-width: 768px) {
//     position: relative;

// border: 2px solid black;
// margin: 1rem;
// justify-content: start;
// display: flex;
// flex-wrap: wrap;
// justify-content: space-evenly;
// }

// `
// const SubMain = styled.div`
//    flex-basis: calc(30% - 20px); /* Adjust the percentage and subtract any margin/padding between cards */
//   margin-bottom: 20px;
//     @media only screen and (max-width: 768px) {
//       flex-basis: calc(20% - 20px); /* Adjust the percentage and subtract any margin/padding between cards */

 

// }
// `

