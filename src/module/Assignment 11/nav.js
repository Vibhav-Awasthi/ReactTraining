import React, { useContext } from "react";
import {AppBar,Toolbar,makeStyles,Switch,Typography,} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { usersContext } from ".";
import { theme } from "./window/Data/mode";

const styles = makeStyles({
  addbar: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Navbar = () => {
  const classes = styles();
  const { mode, setMode } = useContext(usersContext);

  return (
    <div>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar style={theme[mode]} className={classes.toolbar}>
          <FormControlLabel
            value={mode}
            control={
              <Switch
                onChange={setMode}
                color="default"
              />
            }
            label={
              <Typography variant="h6" className={classes.heading}>
                {"Click here to change mode"}
              </Typography>
            }
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
