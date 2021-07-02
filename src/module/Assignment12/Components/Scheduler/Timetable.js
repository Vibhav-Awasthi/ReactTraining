import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { AddSchedule } from "./AddSchedule";
import { UserInfo } from "./UserInfo";
import { colors } from "../../utils/colorsName";
import { GridTop } from "./GridTop";

const styles = makeStyles({
  mainContainer: {
    padding: "10px 15px",
  },
  item: {
    border: `0.5px solid ${colors.borderBlue}`,
    borderRadius: "5px",
    margin: "10px 5px",
    color: colors.DarkGray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.LightBlue,
    "&:hover": {
      backgroundColor: colors.LightBlue,
    },
  },
  openShift: {
    borderRadius: "5px",
    margin: "10px 5px",
    backgroundColor: "#c7f5d3",
  },
  openShiftColor: {
    color: "darkgreen",
    fontWeight: "900",
    fontSize:"15px",
  },
});

export const Timetable = () => {
  const classes = styles();

  return (
    <div>
      <div className={classes.mainContainer}>
        <GridTop />
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.openShift}>
            <div>
              <Typography className={classes.openShiftColor}>
                {"Open Shifts"}
              </Typography>
            </div>
          </Grid>
          <AddSchedule />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.item}>
            <UserInfo
              image={"./images/assignment12/man2.jpeg"}
              name={"Harry H."}
            />
          </Grid>
          <AddSchedule />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.item}>
            <UserInfo
              image={"./images/assignment12/woman.jpeg"}
              name={"Jassie H."}
            />
          </Grid>
          <AddSchedule />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.item}>
            <UserInfo
              image={"./images/assignment12/man2.jpeg"}
              name={"Harry H."}
            />
          </Grid>
          <AddSchedule />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.item}>
            <UserInfo
              image={"./images/assignment12/woman.jpeg"}
              name={"Jassie H."}
            />
          </Grid>
          <AddSchedule />
        </Grid>
      </div>
    </div>
  );
};
