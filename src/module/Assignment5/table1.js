import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBuyComp from "./table3";

const styles = makeStyles({
  container: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    width: "100%",
    margin: "0 auto 20px",
    border: "0.5px solid lightgray",
    backgroundColor: "white",
  },
  heading: {
    margin: "0 2.5% 0",
    fontSize: "25px",
  },
});

const columns = [
  { id: "seller", label: "Seller", align: "left", minWidth: "25%" },
  {
    id: "paymentmethod",
    label: "Payment method",
    align: "left",
    minWidth: "30%",
  },
  {
    id: "price",
    label: "Price/XMR",
    minWidth: "20%",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "limits",
    label: "Limits",
    minWidth: "20%",
    align: "left",
  },
  {
    id: "button",
    minWidth: "5%",
    align: "center",
  },
];

export default function TableSell() {
  const classes = styles();
  return (
    <div className="classes.table">
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableBuyComp
              cell1={"appukuttan (305; 100%)"}
              cell2={"Other online payment"}
              cell2details={"Paytm,amazon-pay,IMPS,TEZ,UPI any mode"}
              cell3={"22950.00 INR"}
              cell4={"100.00 - 18622.76 INR"}
              deal={"Buy"}
            />
            <TableBuyComp
              cell1={"appukuttan (305; 100%)"}
              cell2={"Other online payment"}
              cell2details={"Paytm,amazon-pay,IMPS,TEZ,UPI any mode"}
              cell3={"22950.00 INR"}
              cell4={"100.00 - 18622.76 INR"}
              deal={"Buy"}
            />
            <TableBuyComp
              cell1={"appukuttan (305; 100%)"}
              cell2={"Other online payment"}
              cell2details={"Paytm,amazon-pay,IMPS,TEZ,UPI any mode"}
              cell3={"22950.00 INR"}
              cell4={"100.00 - 18622.76 INR"}
              deal={"Buy"}
            />
            <TableBuyComp
              cell1={"appukuttan (305; 100%)"}
              cell2={"Other online payment"}
              cell2details={"Paytm,amazon-pay,IMPS,TEZ,UPI any mode"}
              cell3={"22950.00 INR"}
              cell4={"100.00 - 18622.76 INR"}
              deal={"Buy"}
            />
            <TableBuyComp
              cell1={"appukuttan (305; 100%)"}
              cell2={"Other online payment"}
              cell2details={"Paytm,amazon-pay,IMPS,TEZ,UPI any mode"}
              cell3={"22950.00 INR"}
              cell4={"100.00 - 18622.76 INR"}
              deal={"Buy"}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}