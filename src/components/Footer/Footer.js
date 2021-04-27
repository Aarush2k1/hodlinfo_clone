import React from "react";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

export default function Footer() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="footer-text">
            <h5>Copyright &copy;</h5>
          </Col>
          <Col md={2} className="footer-text">
            <h4>hodlinfo.com</h4>
          </Col>
          <Col md={2} className="footer-text mr-5">
            <h4>
              Developed by <span style={{ color: "#5dc7c2" }}>QuadBTech</span>
            </h4>
          </Col>
          <Col md={2} className="footer-text ml-5">
            <h5>Support</h5>
          </Col>
        </Row>
      </Container>
      <div style={phantom} />
      <div style={style}>Add to Home Screen</div>
    </>
  );
}
