import React from "react";
import { makeStyles, Link } from "@material-ui/core";
import { colors } from "../../utils/colorsName";

const styles = makeStyles({
  link: {
    padding: "0 15px",
    color: colors.lightGray,
    "&:hover": {
      color: colors.DarkBlue,
    },
  },
});

export const Linkers = (props) => {
  const classes = styles();

  return (
    <div>
      <Link href="#" className={classes.link} underline={"none"}>
        {props.name}
      </Link>
    </div>
  );
};
