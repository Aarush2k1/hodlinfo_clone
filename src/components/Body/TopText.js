import React from "react";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";

export default function TopText() {
  return (
    <div>
      <Container className=".d-flex justify-content-around align-items-center">
        <Row>
          <Col md={2}>
            <div className="">.3 %</div>
            <div className="">5min</div>
          </Col>
          <Col md={2}>
            <div className="">1.1 %</div>
            <div className="">1 Hour</div>
          </Col>
          <Col md={4}>
            <div className="avg-subText">Best Price to Trade</div>
            <div className="avg-heading">₹ 43,35,085</div>
            <div className="avg-subText">
              Average BTC/INR net price including commission
            </div>
          </Col>
          <Col md={2}>
            <div>3.17 %</div>
            <div>1 Day</div>
          </Col>

          <Col md={2}>
            <div>6.67 %</div>
            <div>7 Days</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
