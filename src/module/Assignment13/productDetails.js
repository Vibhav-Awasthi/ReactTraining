import { makeStyles } from "@material-ui/core";
import data from "./data";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
  head:{
    color:"white",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "auto",
    margin: "25px ",
  },
  media: {
    height: "250px",
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
      backgroundColor: "#b3cccc",
    },
  },
  link: {
    textDecoration: "none",
  },
  details: {
    paddingTop: "2px",
  },
});

const ProductDetails = () => {
  const classes = styles();
  const { id } = useParams();

  const FindProduct = data.find((product) => product.id === id);

  return (
    <div className={classes.cardContainer}>
      <Typography className={classes.head} variant="h2">{"Product Details!"}</Typography>
      <Card className={classes.card} raised={true}>
        <CardActionArea>
        <CardMedia className={classes.media}>{FindProduct.image}</CardMedia>
          <CardContent>
            <Typography variant="h5">{FindProduct.title}</Typography>
            <Typography
              className={classes.details}
              variant="h6"
            >{`Price : ${FindProduct.price}`}</Typography>
            <Typography
              className={classes.details}
              variant="p"
            >{`Description : ${FindProduct.description}`}</Typography>
            <br />
            <Typography
              className={classes.details}
              variant="p"
            >{`Category : ${FindProduct.category}`}</Typography>
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

export default ProductDetails;