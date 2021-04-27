import React from "react";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";

export default function TopText() {
  return (
    <div>
      <Container className=".d-flex justify-content-around align-items-center">
        <Row className="align-items-center">
          <Col md={2}>
            <div className="avg-header-mainText color-green">0.38 %</div>
            <div className="avg-header-subHeading">5min</div>
          </Col>
          <Col md={2}>
            <div className="avg-header-mainText color-green">1.1 %</div>
            <div className="avg-header-subHeading">1 Hour</div>
          </Col>
          <Col md={4}>
            <div className="avg-subText">Best Price to Trade</div>
            <div className="avg-heading">₹ 43,35,085</div>
            <div className="avg-subText">
              Average BTC/INR net price including commission
            </div>
          </Col>
          <Col md={2}>
            <div className="avg-header-mainText color-green">3.17 %</div>
            <div className="avg-header-subHeading">1 Day</div>
          </Col>

          <Col md={2}>
            <div className="avg-header-mainText color-green">6.67 %</div>
            <div className="avg-header-subHeading">7 Days</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
