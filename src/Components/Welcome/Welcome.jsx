import React from 'react';
import { auth } from '../../firebase';
import { GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';
import "./Welcome.css"
import GoogleIcon from "../../img/icons8-google-48.png"

const Welcome = () => {
  const  googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
    
}
  return (
    <div className="welcome">
    <h2>Welcome to React Chat.</h2>
    <img src="/logo512.png" alt="ReactJs logo" width={70} height={70} />
    <p>Sign in with Google to chat with with your fellow React Developers.</p>
    <button  onClick={googleSignIn}>
      <img
       
        src={GoogleIcon}
        alt="sign in with google"
        type="button"
      />
      Sign In with Google
    </button>
    </div>
  );
}

export default Welcome;
