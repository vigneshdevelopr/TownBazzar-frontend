import React from 'react'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Login from './Pages/Login'
import { styled } from 'styled-components'
import Register from './Pages/Register'
import Loading from './components/Loading'
import Home from './Pages/Home'

function App() {
  return (
    <Container>
<Switch>
  
        <Route exact path='/'>
            <Login />
        </Route>
        
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/loading'>
          <Loading />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
    </Switch>
    </Container>
 
   
  )
}

export default App

const Container = styled.div`
width: 100vw;
`

