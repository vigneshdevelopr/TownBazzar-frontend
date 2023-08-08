import React, { useEffect } from 'react'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Login from './Pages/Login'
import { styled } from 'styled-components'
import Register from './Pages/Register'
import Loading from './components/Loading'
import Home from './Pages/Home'
import Dummy from './Pages/Dummy'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function App() {
  const history = useHistory();
const localStorageToken = window.localStorage.getItem("access-token")
useEffect(()=>{
if(!localStorageToken){
  history.push('/')
}
},[])

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
        <Route path='/dummy'>
          <Dummy />
        </Route>
    </Switch>
    </Container>
 
   
  )
}

export default App

const Container = styled.div`
width: 100%;
`

