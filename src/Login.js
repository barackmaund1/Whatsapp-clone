import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { provider,auth } from './firebase';

const Login = () => {
   const signIn = () =>{
       auth.signInWithPopup(provider)
       .then((result) =>console.log(result))
       .catch((error) => alert(error.message))
   };

    return (
        <div className='login'>
           <div className='login__container'>
              <img  className='login__image' src='https://bit.ly/33E8SSO' alt=''/>
              <div className='login__text'>
              <h1>Sign in to WhatsApp</h1>
              </div>
              <Button onClick={signIn}>SIGN WITH GOOGLE</Button>
           </div>
        </div>
    )
}

export default Login
