import React from "react";
import "./styles.css";
import { Button, Col, Container, Row, ToggleButton } from "react-bootstrap";
import CircularStatic from "./CircularStatic";
import bg from "../../images/3.png";
import { MenuItem, Select } from "@material-ui/core";

export default function Header() {
  const names = ["BTC", "ETH", "USDT", "XRP", "TRX", "BTT"];

  return (
    <div style={{ padding: "20px 30px 0px" }}>
      <Container className="align-items-center justify-content-sm-center">
        <Row className="form-row mr-auto">
          <Col md={4} className="mw-1">
            <img
              src={bg}
              alt="headimg"
              style={{ width: "70%", marginLeft: 0 }}
            />
            <p className="head">Powered By Finstreet</p>
          </Col>
          <Col lg={4} md={2} sm={12} w={100}>
            <Select className="m-1">
              <MenuItem value="INR">INR</MenuItem>
            </Select>
            <Select className="m-1">
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            <Button variant="light">Buy</Button>
          </Col>
          <Col md={4}>
            <CircularStatic />
            <Button className="ml-4 mb-4 telegram-button">
              Connect Telegram
            </Button>
            <ToggleButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
