import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { colors } from "../../utils/colorsName";
import { CheckboxComp } from "./CheckboxComp";

const styles = makeStyles({
  main: {
    width: "15%",
    padding: "0 20px 20px",
    backgroundColor: colors.LightBlue,
    height: "auto",
  },
  heading: {
    color: colors.DarkBlue,
    padding: "32px 15px 10px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  listItem: {
    fontWeight: "bold",
  },
});

export const Leftbar = () => {
  const classes = styles();
  const [open, setOpen] = useState({ lilli: false, nadia: false, john: false });

  return (
    <div className={classes.main}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <Typography className={classes.heading}>{"VIEW"}</Typography>
        <CheckboxComp label={"Shifts"} />
        <CheckboxComp label={"Absences"} />
        <CheckboxComp label={"Events"} />

        <Typography className={classes.heading}>
          {"LOCATION & TEAMS"}
        </Typography>

        <ListItem
          button
          onClick={() => {
            setOpen({ ...open, lilli: !open.lilli });
          }}
        >
          <ListItemText primary="Lilli's Cafe" className={classes.listItem} />
          {open.lilli ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.lilli} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CheckboxComp label={"Bar"} />
            <CheckboxComp label={"Kitchen"} />
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => {
            setOpen({ ...open, john: !open.john });
          }}
        >
          <ListItemText primary="John's Cafe" className={classes.listItem} />
          {open.john ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.john} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CheckboxComp label={"Bar"} />
            <CheckboxComp label={"Reception"} />
            <CheckboxComp label={"Kitchen"} />
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => {
            setOpen({ ...open, nadia: !open.nadia });
          }}
        >
          <ListItemText primary="Nadia's Cafe" className={classes.listItem} />
          {open.nadia ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.nadia} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CheckboxComp label={"Bar"} />
            <CheckboxComp label={"Reception"} />
            <CheckboxComp label={"Kitchen"} />
          </List>
        </Collapse>
      </List>
    </div>
  );
};
