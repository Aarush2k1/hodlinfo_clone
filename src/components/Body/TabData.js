import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(id, sno, platform, ltp, bsp, difference, savings) {
  return { id, sno, platform, ltp, bsp, difference, savings };
}
const useStyles = makeStyles({
  head: {
    fontFamily: "Oswald",
    fontSize: "16px",
    opacity: 0.45,
    letterSpacing: "1px",
    margin: "0 0 -5px",
  },
  body: {
    fontSize: 14,
    padding: 20,
    fontWeight: 500,
    lineHeight: 1.2,
    borderTop: "1px solid #dee2e6",
  },
  color: {
    color: "#5dc7c2",
    // color: #da5757;
  },
  h4: {},
  cell: {
    margin: "15px",
    backgroundColor: "#f8f9fa",
    display: "inline-block",
    marginBlockStart: "1.33em",
    marginBlockEnd: "1.33em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
});
const rows = [
  createData(
    0,
    1,
    "WazirX",
    "42,85,431",
    "₹ 42,86,072/₹ 42,93,999",
    "6.68%",
    "2,68,471"
  ),
  createData(
    1,
    2,
    "Bitbns",
    "43,03,936",
    "₹ 43,03,240 / ₹ 43,03,936",
    "6.68%",
    "2,68,471"
  ),
  createData(
    2,
    3,
    "Giotus",
    "42,85,431",
    "₹ 41,67,000 / ₹   43,00,002",
    "6.85 %",
    "2,68,471"
  ),
  createData(
    3,
    4,
    "Colodax",
    "43,00,002",
    "₹ 41,67,000/₹ 43,00,002",
    "-36.40%",
    "2,75,488"
  ),
  createData(
    4,
    5,
    "Zebpay",
    "43,27,900",
    "₹ 42,86,072/₹   42,93,999",
    "6.68%",
    "2,68,471"
  ),
  createData(
    5,
    6,
    "CoinDCx",
    "43,23,675",
    "₹ 43,23,502 / ₹ 43,35,525",
    "7.43%",
    "2,99,162"
  ),
];

export default function TabData() {
  const classess = useStyles();

  return (
    <>
      <Table responsive="sm" className="table-responsive" m={1} p={1}>
        <TableHead>
          <TableRow className={classess.head}>
            <TableCell>#</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Last Traded Price</TableCell>
            <TableCell>Buy/Sell Price</TableCell>
            <TableCell>Difference</TableCell>
            <TableCell>Savings</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classess.body}>
          {rows.map((row) => (
            <TableRow styles={{ padding: "10px" }} m={2} key={row.id}>
              <TableCell>{row.sno}</TableCell>
              <TableCell>{row.platform}</TableCell>
              <TableCell>₹ {row.ltp}</TableCell>
              <TableCell>{row.bsp}</TableCell>
              <TableCell className={classess.color}>{row.difference}</TableCell>
              <TableCell className={classess.color}>
                ▲ ₹ {row.savings}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
