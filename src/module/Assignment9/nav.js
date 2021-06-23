import { makeStyles } from "@material-ui/core";
import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const styles = makeStyles({
  addbar: {
    backgroundColor: "white",
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-start",
    color: "black",
    marginRight: "20px",
  },
  button: {
    color: "white",
    margin: "15px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#b3cccc",
    },
  },
  link: {
    textDecoration: "none",
  },
});

const Topbar = (props) => {
  const classes = styles();
  const history = useHistory();

  const handleClick = () => {
    if (props.isLogin) {
      history.push("/Login");
    } else {
      localStorage.removeItem("accessToken");
      history.push("/");
    }
  };
  return (
    <div>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleClick}
          >
            {props.action}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;