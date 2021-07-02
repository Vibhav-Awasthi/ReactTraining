import {
  Checkbox,
  FormControlLabel,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  listitem: {
    padding: "0 15px",
  },
});

export const CheckboxComp = (props) => {
  const classes = styles();
  return (
    <div>
      <ListItem className={classes.listitem}>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label={props.label}
        />
      </ListItem>
    </div>
  );
};
