import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { colors } from "../../utils/colorsName";
import AddIcon from "@material-ui/icons/Add";

const styles = makeStyles({
  item: {
    border: `0.5px solid ${colors.borderBlue}`,
    borderRadius: "5px",
    margin: "10px 5px",
    color: colors.DarkGray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: colors.LightBlue,
    },
  },
});

export const AddSchedule = () => {
  const classes = styles();

  return (
    <div>
      <Grid item xs className={classes.item}>
        <AddIcon fontSize={"small"} color={"disabled"} />
      </Grid>
      <Grid item xs className={classes.item}>
        <AddIcon fontSize={"small"} color={"disabled"} />
      </Grid>
      <Grid item xs className={classes.item}>
        <AddIcon fontSize={"small"} color={"disabled"} />
      </Grid>
      <Grid item xs className={classes.item}>
        <AddIcon fontSize={"small"} color={"disabled"} />
      </Grid>
      <Grid item xs className={classes.item}>
        <AddIcon fontSize={"small"} color={"disabled"} />
      </Grid>
      <Grid item xs className={classes.item}>
        <AddIcon fontSize={"small"} color={"disabled"} />
      </Grid>
    </div>
  );
};
