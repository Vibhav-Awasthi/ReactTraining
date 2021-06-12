import React, { useState } from "react";
import LoginScreen from "./loginScreen";

const SignUpScreen = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(true);

  const checkSignUp = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    if (username.trim() === "") alert("Please enter your username");

    if (email.trim() === "") alert("Please enter your email");
    else if (!email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      alert("Please enter a valid email address");

    if (password.trim() === "") alert("Please enter your password");
    else setSignUpOpen(false);
  };
  return (
    <div>
      {isSignUpOpen ? (
        <div className={"signUpContainer"}>
          <form>
            <label htmlFor={"username"}>{"Username *"}</label>
            <input
              type={"text"}
              required
              id={"username"}
              name={"username"}
              placeholder={"Enter your username"}
            />
            <label htmlFor={"signUpEmail"}>{"Email *"}</label>
            <input
              type={"email"}
              required
              id={"signUpEmail"}
              name={"signUpEmail"}
              placeholder={"Enter your email"}
            />
            <label htmlFor={"signUpPassword"}>{"Password *"}</label>
            <input
              type={"password"}
              required
              id={"signUpPassword"}
              name={"signUpPassword"}
              placeholder={"Enter your password"}
            />
            <button onClick={checkSignUp} className={"submit"} type={"button"}>
              {"Sign Up"}
            </button>
          </form>
        </div>
      ) : (
        <LoginScreen />
      )}
    </div>
  );
};

export default SignUpScreen;