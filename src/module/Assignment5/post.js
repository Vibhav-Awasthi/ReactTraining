import React from "react";
import {Button, Typography, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';



const styles = makeStyles({

    para:{
        fontSize:"26px",
        color:"	 #334d4d",
    },
    post:{
        margin:"30px 10px 30px 250px"
    },
    postBtn:{
        border:"1px solid #b3ffb3",
        backgroundColor:"#e6ffe6",
    },
    buyLink:{
        color:"#00b300",
        textDecoration:"underlined",
    },
    plus:{
        color:"#00b300",
        position:"relative",
        top:"7px",
        right:"2px",
    }
});

export default function SideBar() {
  const classes = styles();
  return (
      <div className={classes.post}>
        <Typography className={classes.para}>You can be the first one to <Button varient="outlined" className={classes.postBtn} startIcon={<AddIcon fontSize={"large"} />}>Post An Ad</Button> in the following categories:</Typography>
        <Typography><AddIcon className={classes.plus}/><Link className={classes.buyLink}>Buy Monero with cash in India</Link></Typography>
      </div>
  );
}