import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  about: {
    width: "70%",
    margin: "20px auto",
  },
  heading: {
    fontWeight: "600",
    "&.MuiTypography-h6": {
      lineHeight: "1.9 !important",
      fontSize: "18px",
    },
  },
  para: {
    margin: "10px 0",
    fontSize: "15px",
    "&.MuiTypography-h6": {
        lineHeight: "2.5 !important",
      },
  },
});

export default function AboutContent(props) {
  const classes = styles();
  return (
    <div className={classes.about}>
      <Typography variant={"h6"} className={classes.heading}>
        {props.heading}
      </Typography>
      <br />
      <Typography variant={"p"} className={classes.para}>
        {props.content}
      </Typography>
    </div>
  );
}