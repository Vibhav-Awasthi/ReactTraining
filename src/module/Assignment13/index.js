import { makeStyles } from "@material-ui/core";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Mainpage from "./dash";
import Home from "./welcome";
import ProductDetails from "./productDetails";
import PrivateRoute from "./route";

const styles = makeStyles({
  mainContainer: {
    background: `linear-gradient(#990101 ,black)`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

const Assignment9 = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/product" component={Mainpage} />
        <PrivateRoute exact path="/product/:id" component={ProductDetails} />
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Assignment9;