import React, { useState } from "react";
import MovieHomeScreen from "./movieScreen";

const LoginScreen = () => {
  const [isLoginOpen, setLoginOpen] = useState(true);

  const checkLogin = () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email.trim() === "") alert("Please enter your email");
    else if (!email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      alert("Please enter a valid email address");
    if (password.trim() === "") alert("Please enter your password");
    else setLoginOpen(false);
  };

  return (
    <div>
      {isLoginOpen ? (
        <div className={"loginContainer"}>
          <form>
            <label htmlFor={"loginEmail"}>{"Email *"}</label>
            <input
              type={"email"}
              required
              id={"loginEmail"}
              name={"loginEmail"}
              placeholder={"Enter your email"}
            />
            <label htmlFor={"loginPassword"}>{"Password *"}</label>
            <input
              type={"password"}
              required
              id={"loginPassword"}
              name={"loginPassword"}
              placeholder={"Enter your password"}
            />
            <button
              onClick={checkLogin}
              className={"loginBtn submit"}
              type={"button"}
            >
              {"Login"}
            </button>
          </form>
        </div>
      ) : (
        <MovieHomeScreen />
      )}
    </div>
  );
};

export default LoginScreen;