import React from "react";

import Base from "../components/Base";
import Banner from "../components/Banner";
import { styled } from "styled-components";
import Card from "../components/Card";
// import { useDispatch, useSelector } from "react-redux";
// import { add, remove } from "../Reducer/CartReducer";
// import { Button, Skeleton } from "@mui/material";

function Home() {
  // const carts = useSelector((state)=>state.cart.value);
  // const dispatch = useDispatch()
  return (
    <Base>
      <MainHome>
        <Banner />
        <Division>Welcome to Town Bazzar </Division>

        <Cards>
          <Card />
        </Cards>

{/* <div>
  <div>
    Cart Value: {carts}
  </div>
  <Button onClick={()=>dispatch(add())}>Increase</Button>
  <Button onClick={()=>dispatch(remove())}>Decrease</Button>
</div> */}

      </MainHome>
    </Base>
  );
}

export default Home;
const MainHome = styled.div`
  position: relative;
  width: 100% !important;
  background-image: linear-gradient(to bottom, #f4e2cc, #ffffff) !important;
`;
const Division = styled.div`
  position: relative;
  padding-top: 8cm;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 1cm;

  @media only screen and (max-width: 768px) {
    position: relative;
    padding-top: 3cm;
    text-align: center;
    font-size: x-large;
    font-weight: bold;
  }
`;


const Cards = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

