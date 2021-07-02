import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../utils/colorsName";

const styles = makeStyles({
  mainContainer: {
    padding: "10px 15px",
    fontFamily:[ '"Montserrat"', '"sans-serif"'].join(","),
  },
  item: {
    backgroundColor: colors.LightBlue,
    margin: "10px 5px",
    borderRadius: "5px",
    color: colors.DarkGray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  firstItem: {
    backgroundColor: colors.LightBlue,
    margin: "10px 5px",
    borderRadius: "5px",
    color: colors.DarkGray,
  },
  bold:{
    fontWeight:"900",
  }
});

export const GridTop = () => {
  const classes = styles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2} className={`${classes.firstItem}`}>
          <div>
            <Typography>{"Total Shifts"}</Typography>
            <Typography className={classes.bold}>{"00h of 00h"}</Typography>
          </div>
        </Grid>
        <Grid item xs className={classes.item}>
          <div> {"3/0h"}</div>
        </Grid>
        <Grid item xs className={classes.item}>
          <div>{"3/0h"}</div>
        </Grid>
        <Grid item xs className={classes.item}>
          <div>{"3/0h"} </div>
        </Grid>
        <Grid item xs className={classes.item}>
          <div> {"3/0h"} </div>
        </Grid>
        <Grid item xs className={classes.item}>
          <div> {"3/0h"}</div>
        </Grid>
        <Grid item xs className={classes.item}>
          <div>{"3/0h"} </div>
        </Grid>
      </Grid>
    </div>
  );
};
