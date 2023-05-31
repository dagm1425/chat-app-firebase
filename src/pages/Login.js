/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { provider, auth } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

function Login({ userIsSignedIn }) {
  useEffect(() => {
    initFirebaseAuth();
  }, []);

  async function signIn() {
    await signInWithPopup(auth, provider);
    // userIsSignedIn();
  }

  function initFirebaseAuth() {
    onAuthStateChanged(auth, authStateObserver);
  }

  function authStateObserver(user) {
    if (user) {
      userIsSignedIn();
    }
  }

  return (
    <>
      <button onClick={signIn}>Sign-In with Google</button>
    </>
  );
}

export default Login;
