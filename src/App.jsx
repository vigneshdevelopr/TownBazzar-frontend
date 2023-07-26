import React from 'react'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Login from './Pages/Login'
import { styled } from 'styled-components'
import Register from './Pages/Register'

function App() {
  return (
    <Container>
<Switch>
        <Route exact path='/login'>
            <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
    </Switch>
    </Container>
 
   
  )
}

export default App

const Container = styled.div`
width: 100vw;
`

