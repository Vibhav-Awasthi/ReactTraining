import React from "react";
import { Link, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    margin:"10px 30px",
    fontSize:"14px",
  },
  link: {
    color: "#1565c0",
    margin: "2px",
  },
});

export default function listFooter(props) {
  const classes = styles();
  return (
    <div className={classes.list}>
      <Link href="#" underline="always" className={classes.link}>
        {props.val1}
      </Link>
      <Link href="#" underline="always" className={classes.link}>
        {props.val2}
      </Link>
      <Link href="#" underline="always" className={classes.link}>
        {props.val3}
      </Link>
      <Link href="#" underline="always" className={classes.link}>
        {props.val4}
      </Link>
    </div>
  );
}