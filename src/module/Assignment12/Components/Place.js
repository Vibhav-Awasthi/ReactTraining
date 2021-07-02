import React from "react";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../utils/colorsName";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";

const styles = makeStyles({
  mainContainer: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  bar: {
    lineHeight: "1",
    padding: "0 10px",
    fontWeight: "900",
  },
  grayColor: {
    color: colors.DarkGray,
    padding: "0 10px",
    fontSize: "13px",
  },
  conflict: {
    color: "#ff5959",
    padding: "0 20px 0 10px",
  },
  icon: {
    color: "#ff5959",
  },
  button: {
    color: colors.DarkBlue,
    borderRadius: "20px",
    border: `1.5px solid ${colors.DarkBlue}`,
    fontSize: "13px",
    padding:"5px 20px",
  },
});

export const Place = (props) => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.left}>
        <Avatar alt="Place Image" src={props.image} />
        <div>
          <Typography variant="h6" className={classes.bar}>
            {props.about}
          </Typography>
          <Typography
            className={classes.grayColor}
          >{`${props.noe} employees`}</Typography>
        </div>
      </div>
      <div className={classes.left}>
        {props.conflict ? (
          <ReportProblemOutlinedIcon className={classes.icon} />
        ) : (
          ""
        )}
        {props.conflict ? (
          <Typography className={classes.conflict}>{"1 Conflict"}</Typography>
        ) : (
          ""
        )}

        <Button variant="outlined" color="primary" className={classes.button}>
          {"Action"}
        </Button>
      </div>
    </div>
  );
};
