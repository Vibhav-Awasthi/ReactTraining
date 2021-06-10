import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link, Typography, Button } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const styles = makeStyles({
  link: { color: "#1565c0" },


  circle: { color: "#81c182" },


  price: {
    color: "#388539",
    fontWeight: "600",
  },

  payment: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },

  button: {
    padding: "7px 16px",
    fontSize: "13px",
    fontWeight: "600",
    margin: "0 5px",
    color: "white",
    backgroundColor: "#FFBA1F",
  },

  about: {
    fontSize: "16px",
  },

  
});


export default function TableBuyComp(props) {
  const classes = styles();
  return (
      <TableRow hover>
        <TableCell key={"seller"} align={"left"} className={classes.cell}>
          <Link href="#" underline="always" className={classes.link}>
            {props.cell1}
          </Link>
          <FiberManualRecordIcon className={classes.circle} />
        </TableCell>
        <TableCell
          key={"paymentmethod"}
          align={"left"}
          className={classes.cell}
        >
          <div className={classes.payment}>
            <Typography variant={"span"}>{"🇮🇳"}</Typography>
            <div>
              <Typography variant={"h6"} className={classes.about}>
                {props.cell2}
              </Typography>
              <Typography variant={"p"}>{props.cell2details}</Typography>
            </div>
          </div>
        </TableCell>
        <TableCell key={"price"} align={"left"} className={classes.cell}>
          <Typography variant="h6" className={classes.price}>
            {props.cell3}
          </Typography>
        </TableCell>
        <TableCell key={"limits"} align={"left"}>
          <Typography variant="p">{props.cell4}</Typography>
        </TableCell>
        <TableCell className={classes.cell}>
          <Button variant="contained" className={classes.button}>
            {props.deal}
          </Button>
        </TableCell>
      </TableRow>
  );
}
