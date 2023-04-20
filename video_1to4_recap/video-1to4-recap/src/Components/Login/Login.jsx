import React, { useState } from 'react';

import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,GithubAuthProvider} from "firebase/auth";
import app from '../firebase';

const Login = () => {
    const[data,setData]=useState({});
function handler(){
    signInWithPopup(auth, provider)
    .then(res=>{
        setData(res.user);
        console.log(res.user);
    }
        )
        .catch(err=>{
            console.log(err.message);
        })

}
function handler2(){
    signOut(auth).then((result) => {
        console.log(result);
        setData({});
      }).catch((error) => {
        console.log(error.message);
      })
}
function gitsign(){
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const user = result.user;
 console.log(user);
  }).catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
 
    // ...
  });
   
}
const githubprovider = new GithubAuthProvider();

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    return (
        <div>
            <button onClick={handler}>sign by google</button>
            <button onClick={gitsign}>Github Sign</button>
            <div>displayName:{data.displayName}</div>
            <div>gmail:{data.email}</div>
            <div></div>
            <button onClick={handler2}>Sign Out</button>
        </div>
    );
};

export default Login;