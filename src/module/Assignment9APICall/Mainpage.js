import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import User from "./User";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ModalFile from "./ModalFile";
import getList from "../Services/GetList";
import addList from "../Services/AddList";

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
  smallboxMain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "10%",
  },
});

const Mainpage = () => {
  const classes = styles();
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
  };

  const handleAdd = () => {
    handleOpen(true);
  };

  async function updatePost(user) {
    addList(user).then((res) => {
      setUsers([...users, res]);
    });
    handleClose();
  }

  useEffect(() => {
    getList().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <ModalFile
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            isAdd={true}
            users={users}
            updatePost={updatePost}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleAdd}
          >
            {"Add User"}
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleLogout}
          >
            {"Logout"}
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.smallboxMain}>
        {users.map((users) => {
          return (
            <User
              key={users.id}
              id={users.id}
              image={users.avatar}
              email={users.email}
              first_name={users.first_name}
              last_name={users.last_name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mainpage;
