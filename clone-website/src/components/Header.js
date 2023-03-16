import React, { useState } from "react"; //import useState
import Paramount from "../images/paramount.png";

//create function component for sign-in button
function Header() {
  //create variables to keep track of sign in
  const [isLoggedIn, setIsLoggedIn] = useState(false); //set to false as default using hook to make stateful

  //create handle function to be called when user clicks Sign In button
  const handleLogin = () => {
    //set to true
    setIsLoggedIn(true);
  };

  //create handle function to be called when user clicks Sign Out button
  const handleLogout = () => {
    //set to false
    setIsLoggedIn(false);
  };

  return (
    <div className="top-bar">
      <div className="logo">
        <img src={Paramount} alt="logo" />
      </div>
      <div className="sign-in">
        {isLoggedIn ? (
          <div>
            <p className="header-welcome">Welcome back!</p>
            <button onClick={handleLogout} className="header-button">
              SIGN OUT
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="header-button">
            SIGN IN
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
