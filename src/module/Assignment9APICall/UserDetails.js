import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ModalFile from "./ModalFile";
import getUser from "../Services/GetUser";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import deleteUser from "../Services/DeleteUser";

const styles = makeStyles({
  addbar: {
    backgroundColor: "white",
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-end",
    color: "black",
    marginRight: "20px",
  },
  button: {
    color: "white",
    margin: "15px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "rgba(238,174,202,1)",
    "&:hover": {
      backgroundColor: "rgba(148,187,233,1)",
    },
  },
  link: {
    textDecoration: "none",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  card: {
    margin: "25px 0 ",
  },
  media: {
    height: "200px",
  },
  action: {
    display: "flex",
    justifyContent: "center",
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
  heading: {
    margin: "70px 0 0",
  },
  link: {
    textDecoration: "none",
  },
  details: {
    paddingTop: "2px",
  },
});

const UserDetails = () => {
  const classes = styles();
  const { id } = useParams();
  const [user, setUser] = useState({});
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

  const handleDelete = () => {
    deleteUser(id).then((res) => {
      if (res.status === 204) {
        history.push("/");
        alert("Successful Deletion");
        localStorage.removeItem("accessToken");
      }
    });
  };

  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res);
    });
  }, []);

  const handleEdit = () => {
    handleOpen(true);
  };

  async function editPost(user) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(`https://reqres.in/api/users`, requestOptions);
    const data = await response.json();
    setUser(data);
    return data;
  }

  return (
    <div className={classes.cardContainer}>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <ModalFile
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            isAdd={false}
            editPost={editPost}
            user={user}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleEdit}
          >
            {"Edit User"}
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleDelete}
          >
            {"Delete"}
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
      <Typography variant="h2" className={classes.heading}>
        {"User Details!!"}
      </Typography>
      <Card className={classes.card} raised={true}>
        <CardActionArea>
          <CardMedia className={classes.media} image={user.avatar} />
          <CardContent>
            <Typography variant="h5">{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography
              className={classes.details}
              variant="h6"
            >{`Email : ${user.email}`}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Link to={"/"} className={classes.link}>
            <Button size="small" variant="contained" className={classes.button}>
              {"Go to Home"}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserDetails;