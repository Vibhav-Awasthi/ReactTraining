import { makeStyles } from "@material-ui/core";
import React from "react";
import { Leftbar } from "./Components/Leftbar/Leftbar";
import { LilliCafe } from "./Components/LilliCafe";
import Navbar from "./Components/Navbar/Navbar";
import { PlaceDetails } from "./Components/PlaceDetails";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
    fontFamily: ['"Montserrat"', '"sans-serif"'].join(","),
  },
  innerContainer: {
    display: "flex",
    margin: "65px 0 0",
  },
  right: {
    width: "85%",
    marginBottom: "40px",
  },
});

const Assignment12MaterialUI = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <div className={classes.innerContainer}>
        <Leftbar />
        <div className={classes.right}>
          <LilliCafe />
          <PlaceDetails />
        </div>
      </div>
    </div>
  );
};

export default Assignment12MaterialUI;
