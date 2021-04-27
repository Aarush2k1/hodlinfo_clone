import React from "react";
import "./styles.css";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Row className="d-flex">
          <Col className="footer-text">Copyright &copy;</Col>
          <Col className="footer-text">hodlinfo.com</Col>
          <Col className="footer-text">
            Developed by <span style={{ color: "#5dc7c2" }}>QuadBTech</span>
          </Col>
          <Col className="footer-text">Support</Col>
        </Row>
      </div>
      <div class="d-flex justify-content-center bottomBox ">
        <div class="btn btn-outline-info">Add hodlinfo To Home Screen</div>
      </div>
    </>
  );
}
