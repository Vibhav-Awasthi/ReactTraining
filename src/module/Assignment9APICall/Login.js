import React, { useEffect, useState } from "react";
import { CircularProgress, makeStyles, Typography } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Paper from "@material-ui/core/Paper";
import validate from "./ValidateLogin";
import { useHistory } from "react-router-dom";

const styles = makeStyles({
  wrapperContainer: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    minheight: "30%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    margin: "30% 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  circle: {
    display: "flex",
    margin: "10px auto",
  },
});

const userInitialValue = { Username: "", Email: "", Password: "" };

export default function Login() {
  const classes = styles();
  const [user, setUser] = useState(userInitialValue);
  const [isError, setIsError] = useState(userInitialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(validate(user));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(isError).length === 0 && isSubmitting) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem("accessToken", "affsDAHdHDHhjguygffsg");
        setIsLoading(false);
        history.push("/user");
      }, 2000);
    }
  }, [isError]);

  const { Username, Email, Password } = user;
  const inputHandle = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={classes.wrapperContainer}>
      {isLoading ? (
        <div>
          <Typography variant="h4">{"Please Wait!Page is Loading"}</Typography>
          <CircularProgress className={classes.circle} />
        </div>
      ) : (
        <Paper className={classes.paper} elevation={3}>
          <LockOpenIcon className={classes.icon} fontSize="large" />
          <form
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="input-with-icon-textfield"
              label="Username"
              required
              value={Username}
              name="Username"
              onChange={inputHandle}
              error={Boolean(isError.Username)}
              helperText={isError.Username}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              id="input-with-icon-textfield"
              label="Email ID"
              required
              value={Email}
              name="Email"
              onChange={inputHandle}
              error={Boolean(isError.Email)}
              helperText={isError.Email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              id="input-with-icon-textfield"
              label="Password"
              required
              value={Password}
              name="Password"
              onChange={inputHandle}
              error={Boolean(isError.Password)}
              helperText={isError.Password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<ExitToAppIcon />}
              type="submit"
            >
              {"Login"}
            </Button>
          </form>
        </Paper>
      )}
    </div>
  );
}
