import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "#f8f9fa",
      padding: "20px 0",
      borderTop: "1px solid #e4e4e4",
      marginTop: "40px"
    }}>
      <Container>
        <Row className="text-center text-md-start">

          <Col md={4} className="mb-3">
            <h5 className="fw-bold">TravelEase</h5>
            <p style={{ fontSize: "14px" }}>
              Book hotels, villas, resorts, and make your travel effortless.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li><a href="/user/home" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="/user/explore" className="text-decoration-none text-dark">Explore</a></li>
              <li><a href="/user/bookings" className="text-decoration-none text-dark">My Bookings</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p style={{ fontSize: "14px" }}>📞 +91 98765 43210</p>
            <p style={{ fontSize: "14px" }}>✉️ support@travelease.com</p>
          </Col>

        </Row>

        <Row>
          <Col className="text-center mt-3">
            <p style={{ fontSize: "13px", color: "#777" }}>
              © {new Date().getFullYear()} TravelEase. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
