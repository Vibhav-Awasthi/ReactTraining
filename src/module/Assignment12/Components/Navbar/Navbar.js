import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Avatar,
  Typography,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { ExpandMore } from "@material-ui/icons";
import { Linkers } from "./Linkers";
import { colors } from "../../utils/colorsName";

const styles = makeStyles({
  addbar: {
    backgroundColor: colors.white,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "gray",
    padding: "0 20px 0 0",
  },
  avatar: {
    marginRight: "20px",
    width: "54px",
    height: "64px",
  },
  labelImage: {
    width: "35px",
    height: "35px",
    margin: "0 15px",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: colors.black,
    marginRight: "22px",
    fontWeight: "900",
    fontSize: "19px",
  },
  icon: {
    padding: "0 20px",
  },
  name: {
    padding: "0 10px",
  },
});

const Navbar = () => {
  const classes = styles();

  return (
    <div>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.innerContainer}>
            <Avatar
              variant="square"
              alt="Logo"
              src={"./images/assignment12/logo.jpg"}
              className={classes.avatar}
            />
            <Avatar
              alt="Logo"
              src={"./images/assignment12/cafe2.jpeg"}
              className={classes.labelImage}
            />
            <Typography className={classes.title}>{"Cafe Lovers"}</Typography>
            <ExpandMore />
          </div>
          <div>
            <Linkers name={"Dashboard"} />
            <Linkers name={"Schedule"} />
            <Linkers name={"Messanger"} />
            <Linkers name={"Reports"} />
            <Linkers name={"Staff"} />
          </div>
          <div className={classes.innerContainer}>
            <NotificationsNoneIcon className={classes.icon} />
            <Avatar alt="Logo" src={"./images/assignment12/man.jpeg"} />
            <Typography className={classes.name}>{"Anton"}</Typography>
            <ExpandMore />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
