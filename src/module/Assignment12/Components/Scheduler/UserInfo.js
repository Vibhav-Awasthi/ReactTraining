import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../utils/colorsName";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
  },
  avatar: {
    width: "35px",
    height: "35px",
  },
  details: {
    fontSize: "13px",
    paddingLeft: "10px",
  },
});

export const UserInfo = (props) => {
  const classes = styles();

  return (
    <div>
      <div className={classes.mainContainer}>
        <Avatar alt="Logo" src={props.image} className={classes.avatar} />
        <div>
          <Typography
            className={classes.details}
            style={{ fontWeight: "bold" }}
          >
            {props.name}
          </Typography>
          <Typography
            className={classes.details}
            style={{ color: colors.DarkGray }}
          >
            {"0h of 40h    +0h"}
          </Typography>
        </div>
      </div>
    </div>
  );
};
