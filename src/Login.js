import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { provider,auth } from './firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

const Login = () => {
   const [{},dispatch]=useStateValue()

   const signIn = () =>{
       auth.signInWithPopup(provider)
       .then((result) =>{
           dispatch({
               type:actionType.SET_USER,
               user:result.user
           })
       })
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
