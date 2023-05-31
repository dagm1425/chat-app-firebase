/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Home({ userIsSignedOut }) {
  var profilePicUrl = getProfilePicUrl();
  var userName = getUserName();

  useEffect(() => {
    initFirebaseAuth();
  }, []);

  function signOutUser() {
    signOut(auth);
    // userIsSignedOut();
  }

  function initFirebaseAuth() {
    onAuthStateChanged(auth, authStateObserver);
  }

  function authStateObserver(user) {
    if (!user) {
      userIsSignedOut();
    }
  }

  function getProfilePicUrl() {
    return auth.currentUser.photoURL;
  }

  function getUserName() {
    return auth.currentUser.displayName;
  }

  function addSizeToGoogleProfilePic(url) {
    if (
      url.indexOf("googleusercontent.com") !== -1 &&
      url.indexOf("?") === -1
    ) {
      return url + "?sz=150";
    }
    return url;
  }

  return (
    <>
      <h3>{userName}</h3>
      <div
        style={{
          backgroundImage:
            "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")",
        }}
      ></div>
      <button onClick={signOutUser}>Sign-Out</button>
    </>
  );
}

export default Home;
