import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-white">
      <Container className="h-100 footer-container">
        <Row className="h-100 align-content-center row-container">
          <Col className="mb-3 first-col" md="3">
            <h5 className="linksHeader">Doctor Booking</h5>
            <p>A website to book doctor appointment and save you the time</p>
          </Col>
          <Col md="3" className="mb-3 offset-md-2">
            <h5 className="linksHeader">Links</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </Col>

          <Col md="3" className="mb-3 offset-md-1">
            <h5 className="linksHeader">Services</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/search">Book an appointment</Link>
              </li>
              <li>
                <Link to="/register">Clinic registration</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
