import React from 'react';
import { auth } from '../../firebase';
import "./NavBar.css"
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleIcon from "../../img/icons8-google-48.png"

import { GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';
const NavBar = () => {
  const [user] = useAuthState(auth);
    const  googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }
    const signOut = ()=>{
      auth.signOut();
    }
  return (
    <main className="NavBar">
    
      <div className='Title'> Chat with me</div>
      {user?  <button onClick={signOut}> Sign Out</button>
      :
      <button onClick={googleSignIn}>
      <img
        
        src={GoogleIcon}
        alt="sign in with google"
        type="button"
      />
      Sign In with Google
    </button>}
  </main>
  );
}

export default NavBar;
