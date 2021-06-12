import React, { useState } from "react";
import "./style.css";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./loginScreen";

const Assignment6 = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  const checkSignUp = () => {
    setIsSignUpOpen(true);
    setIsHomeOpen(false);
  };

  const checkLogin = () => {
    setIsLoginOpen(true);
    setIsHomeOpen(false);
  };
  return (
    <div className={"mainContainer"}>
      {isSignUpOpen && <SignUpScreen />}
      {isLoginOpen && <LoginScreen />}

      {isHomeOpen && (
        <div>
          <div className={"homeContainer"}>
            <div className={"existingUser"}>
                <img src={"./Images/Assignment6/star.png"} alt={"star"}></img>
              <p>{"Already an existing user ?"}</p>
              <button type={"button"} onClick={checkLogin}>
                {"Login"}
              </button>
              <p>{"or"}</p>
            </div>
            <div className={"newUser"}>
              <p>{"Don't have an account ?"}</p>
              <button type={"button"} onClick={checkSignUp}>
                {"SignUp"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignment6;