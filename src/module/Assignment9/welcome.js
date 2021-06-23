import React from "react";
import Topbar from "./nav";

const Home = () => {

  return (
    <div>
      <Topbar action={"Login"} isLogin={true} />
      <img src={"./Images/Assignment9/background.jpg"} alt={"background"}></img>
    </div>
  );
};

export default Home;
