import React, { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const userIsSignedIn = () => {
    setIsUserSignedIn(true);
  };

  const userIsSignedOut = () => {
    setIsUserSignedIn(false);
  };

  return (
    <>
      {isUserSignedIn ? (
        <Home userIsSignedOut={userIsSignedOut} />
      ) : (
        <Login userIsSignedIn={userIsSignedIn} />
      )}
    </>
  );
}

export default App;
