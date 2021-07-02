import React from "react";
import {
  Button,
  InputAdornment,
  InputBase,
  makeStyles,
} from "@material-ui/core";
import { colors } from "../utils/colorsName";
import SearchIcon from "@material-ui/icons/Search";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "21px 10px",
    alignItems: "center",
  },
  button: {
    color: colors.DarkBlue,
    borderRadius: "20px",
    border: `1.5px solid ${colors.DarkBlue}`,
    fontSize: "13px",
    padding: "5px 20px",
  },
  search: {
    borderRadius: "50%",
    backgroundColor: colors.LightBlue,
    margin: "0 10px",
    width: "33px",
  },
  icon: {
    color: "black",
  },
});

export const Schedule = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <div></div>
      <div></div>
      <div>
        <InputBase
          className={classes.search}
          startAdornment={
            <InputAdornment>
              <SearchIcon className={classes.icon} />
            </InputAdornment>
          }
        ></InputBase>
        <Button variant="outlined" color="primary" className={classes.button}>
          {"Action"}
        </Button>
      </div>
    </div>
  );
};
