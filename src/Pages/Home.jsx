import React from 'react'

import Base from '../components/Base'
import Banner from '../components/Banner'
import { styled } from 'styled-components'
import Card from '../components/Card'

function Home() {
  return (
    <Base>
    <Banner />
    <Division>Welcome to Town Bazzar     </Division>

    <Main>

<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
    </Main>

    </Base>
  )
}

export default Home
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
const Main = styled.div`
position: relative;

  border: 2px solid black;
  margin: 1rem;
  display: grid;
  justify-content: center;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-content: start;
  place-items: none;

}

`

