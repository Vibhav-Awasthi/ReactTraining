import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
    footer: {
      width:"100%",
      display:"flex",
      justifyContent:"center",
      textAlign:"center",
    },
  });

function Footer() {
const classes = styles();
  return (
    <div className={classes.footer}>
      <AppBar
        position="relative"
        color="default"
        style={{ position: "fixed", bottom: "0" }}
      >
        <Toolbar className={classes.footer}>
          <Typography>Contact us on 88840702658 or drop a Mail on <Link>(vibhavawasthi54@agmail.com).</Link></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default (Footer);

