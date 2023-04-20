import React from 'react';

import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import app from '../../Firebase/Firebase';

const Login = () => {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    function signbygoogle(){
        signInWithPopup(auth, provider)
        .then((result) => {
           
          
            console.log(result.user);
            
          }).catch((error) => {
           console.log(error.message);
            // const errorMessage = error.message;
            // console.log(errorMessage);
           
          });
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={signbygoogle}>sign by google</button>
        </div>
    );
};

export default Login;