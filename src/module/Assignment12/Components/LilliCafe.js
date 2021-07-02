import React from "react";
import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../utils/colorsName";

const styles = makeStyles({
  mainContainer: {
    padding: "10px 0 10px 10px",
    display: "flex",
    justifyContent: "space-around",
  },
  heading: {
    marginRight: "30px",
    fontWeight:"900",
  },
  divider: {
    marginTop: "20px",
  },
  button: {
    color: colors.Gray,
    borderRadius: "15px",
    padding: "0 17px",
    margin: "0 4px",
    "&:hover": {
      backgroundColor: colors.DarkBlue,
      color: colors.white,
    },
  },
});

export const LilliCafe = () => {
  const classes = styles();

  return (
    <div>
      <Divider className={classes.divider} />
      <div className={classes.mainContainer}>
        <Typography variant="h6" className={classes.heading}>
          {"Lilli's Cafe"}
        </Typography>
        <Button className={classes.button}>{"+ Mon 11"}</Button>
        <Button className={classes.button}>{"+ Tue 12"}</Button>
        <Button className={classes.button}>{"+ Wed 13"}</Button>
        <Button className={classes.button}>{"+ Thurs 14"}</Button>
        <Button className={classes.button}>{"+ Fri 15"}</Button>
        <Button className={classes.button}>{"+ Sat 16"}</Button>
        <Button className={classes.button}>{"+ Sun 17"}</Button>
      </div>
      <Divider />
    </div>
  );
};
