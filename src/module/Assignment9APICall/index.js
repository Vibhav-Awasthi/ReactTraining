import { makeStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Mainpage from "./Mainpage";
import Home from "./Home";
import UserDetails from "./UserDetails";
import PrivateRoute from "./PrivateRoute";

const styles = makeStyles({
  mainContainer: {
    background: `linear-gradient(black, white)`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

const Assignment9API = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/user" component={Mainpage} />
        <PrivateRoute exact path="/user/:id" component={UserDetails} />
      </Switch>
    </div>
  );
};

export default Assignment9API;
