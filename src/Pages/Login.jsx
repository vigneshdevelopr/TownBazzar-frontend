import React from 'react'
import { styled } from 'styled-components'
import BrandLogo from '../assets/brandlogo.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function Login() {
    const history = useHistory();
  return (
<Container>
    <ArcArea>

    <Logo>
    <img className='logo' src={BrandLogo} alt='Brand Logo' />
</Logo>
<Form>
  <input type="email" placeholder='username' />
  <input type="password" placeholder='password' />
   <button>Login</button>
</Form>
<h5 style={{textAlign:'center'}}>Don't Have an account ?
</h5>
<p onClick={()=>history.push('/register')}>
    create a new account
</p>
    </ArcArea>

</Container>
    )
}

export default Login

const Container = styled.div`
width: 100%;   
height: 100vh;
font-family: 'Marcellus', serif;
font-size: larger;
color: whitesmoke;
/* border: 2px solid black; */
display: flex;
justify-content: center;

background: url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80');
background-repeat: no-repeat;
background-size: cover;
`
const Logo = styled.div`
padding: 20px;
/* border: 2px solid darkgray; */
text-align: center;


img{
    height: 90px;
background-color: #e76b6b;
border-radius:9px;
    /* border: 2px solid darkcyan; */

}
`
const Form = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
margin: 0 auto;


input{
    display: flex;
    margin-top: 10px;
    border: none;
    padding: 10px;
    border-radius: 8px;

}
button{
    margin-top: 30px !important;
    padding: 10px 30px !important;
    background-color: mediumseagreen;
border: none;
border-radius: 9px;
width: fit-content;
display: flex;
margin: 0 auto;
padding: 8px;
    &:hover{
        cursor: pointer;
        background-color: #215d3c;

    }
}

`
const ArcArea = styled.div`
/* border: 2px solid white; */
width: fit-content;
display: flex;
flex-direction: column;
padding: 2cm;
justify-content: center;
margin: 20px 0;
border-radius: 10px;
background-color: #252525;
opacity: 85%;

p{
    text-align: center;
    color: whitesmoke;
    text-decoration: none;
    margin: 10px;

    &:hover{
        cursor: pointer;
    }

}

`