import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
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
      backgroundColor: "rgba(148,187,233,1)",
    },
  },
  link: {
    textDecoration: "none",
  },
  heading: {
    padding: "19.6% 0",
  },
});

const Home = () => {
  const classes = styles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => {
              history.push("/Login");
            }}
          >
            {"Login"}
          </Button>
        </Toolbar>
      </AppBar>
      <Typography className={classes.heading} variant="h1">
        {"Hello!!"}
      </Typography>
    </div>
  );
};

export default Home;
