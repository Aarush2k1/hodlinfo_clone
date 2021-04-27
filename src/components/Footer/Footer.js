import React from "react";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";

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
      <div className="bottomBox justify-content-center">
        <div className="btn btn-outline-info">Add hodlinfo To Home Screen</div>
      </div>
    </>
  );
}
