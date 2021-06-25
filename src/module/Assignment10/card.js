import { makeStyles } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
  card: {
    width: "200px",
    margin: "80px ",
    color: "black",
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
    backgroundColor: "rgba(238,174,202,1)",
    "&:hover": {
      backgroundColor: "rgba(148,187,233,1)",
    },
  },
  link: {
    textDecoration: "none",
  },
});

const Color = (props) => {
  const classes = styles();
  return (
    <div>
      <Card
        className={classes.card}
        style={{ backgroundColor: props.color }}
        raised={true}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="h5">{`Name : ${props.name}  `}</Typography>
            <Typography variant="h6">{`Color : ${props.color} `}</Typography>
            <Typography variant="h6">{`Year : ${props.year}`}</Typography>
            <Typography variant="h6">{`Pantone Value : ${props.pantone_value}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Color;
