import React from "react";
import Topbar from "./nav";
import Footer from "./footer"
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  picture: {
    width:"100%",
    height:"800px",
  },
});

const Home = () => {
  const classes = styles();

  return (
    <div>
      <Topbar action={"Login"} isLogin={true} />
      <img className={classes.picture} src={"./Images/Assignment9/background.jpg"} alt={"background"}></img>
      <Footer/>
    </div>
  );
};

export default Home;
