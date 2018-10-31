import React from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const bottom = () => {

  return (
    <div className="container">
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={3} className="footer-list-body">
            <ListGroup>
              <ListGroupItem className="footer-list-header"><p>Get Started</p></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="/signup">Signup</a></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="login">Login</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={6} md={3}>
            <ListGroup className="footer-list-body">
              <ListGroupItem className="footer-list-header"><p>Learn More</p></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="/about">How Bypert works</a></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="/policies">Policies</a></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="/trust">Trust & Security</a></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="/faqs">FAQs</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={6} md={3}>
            <ListGroup className="footer-list-body">
              <ListGroupItem className="footer-list-header"><p>Markets</p></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="https://losangeles.craigslist.org/search/sya?query=laptop" target="_blank">Los Angeles</a></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="https://orangecounty.craigslist.org/search/sys?query=laptop" target="_blank">Orange County</a></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="https://washingtondc.craigslist.org/search/sya?query=laptop" target="_blank">Washington, DC</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={6} md={3}>
            <ListGroup className="footer-list-body">
              <ListGroupItem className="footer-list-header"><p>Talk to us</p></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="#">Social Media</a></ListGroupItem>
              <ListGroupItem className="footer-list-item"><a href="/contact">Contact Customer Support</a></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default bottom;
