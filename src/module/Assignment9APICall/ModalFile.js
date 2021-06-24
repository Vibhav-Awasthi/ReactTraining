import { React, useState, useEffect } from "react";
import {
  Button,
  makeStyles,
  Modal,
  Fade,
  Backdrop,
  TextField,
  Typography,
} from "@material-ui/core";
import validate from "./ValidateUser";
import { useHistory } from "react-router";
import {v4 as uuidv4} from 'uuid';
import getList from "./Services/GetList";
import getUser from "./Services/GetUser";

const styles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid #000",
    backgroundColor: "white",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "35%",
    padding: "5px 10px",
    borderRadius: "10px",
    backgroundColor: "#daf5f9",
  },
  input: {
    margin: "10px",
    width: "300px",
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
});

const errorInitialValues = {
  first_name: "",
  last_name: "",
  email: "",
};

const userInitialValue = {
  id: uiid(),
  first_name: "",
  last_name: "",
  email: "",
  avatar: "https://reqres.in/img/faces/1-image.jpg",
};

const ModalFile = (props) => {
  // UseState Hooks
  const classes = styles();
  const [user, setUser] = useState(userInitialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(errorInitialValues);

  useEffect(() => {
    if (!props.isAdd) {
      setUser(props.user);
    }
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(validate(user));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(isError).length === 0 && isSubmitting) {
      if (props.isAdd) {
        props.updatePost(user);
        setUser(userInitialValue);
      } else {
        props.editPost(user);
        props.handleClose();
      }
    }
  }, [isError]);

  const { first_name, last_name, email, avatar } = user;
  const inputHandle = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={props.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Typography variant="h5">{"Add User Details"}</Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.input}
                required
                label="Add First Name"
                variant="outlined"
                value={first_name}
                name="first_name"
                onChange={inputHandle}
                error={Boolean(isError.first_name)}
                helperText={isError.first_name}
              />
              <TextField
                className={classes.input}
                required
                name="last_name"
                onChange={inputHandle}
                label="Add Last Name"
                variant="outlined"
                value={last_name}
                error={Boolean(isError.last_name)}
                helperText={isError.last_name}
              />
              <TextField
                className={classes.input}
                required
                label="Add Email"
                variant="outlined"
                value={email}
                name="email"
                onChange={inputHandle}
                error={Boolean(isError.email)}
                helperText={isError.email}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                {"Submit Details"}
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => {
                  props.handleClose();
                }}
              >
                {"Close"}
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalFile;