import React from "react";

function createData(id, sno, platform, ltp, bsp, difference, savings) {
  return { id, sno, platform, ltp, bsp, difference, savings };
}
const rows = [
  createData(
    0,
    1,
    "WazirX",
    "₹ 42,85,431",
    "₹ 42,86,072/₹ 42,93,999",
    "6.68%",
    "₹ 2,68,471"
  ),
  createData(
    1,
    2,
    "Bitbns",
    "₹ 43,03,936",
    "₹ 43,03,240 / ₹ 43,03,936",
    "6.68%",
    "₹ 2,68,471"
  ),
  createData(
    2,
    3,
    "Giotus",
    "₹ 42,85,431",
    "₹ 41,67,000 / ₹   43,00,002",
    "6.85 %",
    "₹ 2,68,471"
  ),
  createData(
    3,
    4,
    "Colodax",
    "₹ 43,00,002",
    "₹ 41,67,000/₹ 43,00,002",
    "6.85%",
    "₹ 2,75,488"
  ),
  createData(
    4,
    5,
    "Zebpay",
    "₹ 43,27,900",
    "₹ 42,86,072/ 42,93,999",
    "6.68%",
    "₹ 2,68,471"
  ),
  createData(
    5,
    6,
    "CoinDCx",
    "₹ 43,23,675",
    "₹ 43,23,502 / ₹ 43,35,525",
    "7.43%",
    "₹ 2,99,162"
  ),
];

export default function TabData() {
  return (
    <div
      className="table table-borderless table-responsive"
      style={{ margin: "0px auto" }}
    >
      <thead className="head">
        <tr>
          <th>#</th>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy/Sell Price</th>
          <th>Difference</th>
          <th>Savings</th>
        </tr>
      </thead>

      <tbody className="body">
        {rows.map((row) => (
          <tr styles={{ padding: "10px" }} m={2} key={row.id}>
            <td>{row.sno}</td>
            <td>{row.platform}</td>
            <td>{row.ltp}</td>
            <td>{row.bsp}</td>
            <td className="rows">{row.difference}</td>
            <td className="rows">{row.savings}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
