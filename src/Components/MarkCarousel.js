import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const marketcarousel = () => {
  return (
    <Grid className="imageGrid">
      <Row>
        <Col className="markImg" xs={12} md={4}>
          <Thumbnail href="https://losangeles.craigslist.org/search/sya?query=laptop" target="_blank" alt="Los Angeles" src="https://i.imgur.com/DJSzJKZ.jpg" />
          <p className="city">Los Angeles, CA</p>
        </Col>
        <Col className="markImg" xs={12} md={4}>
          <Thumbnail href="https://orangecounty.craigslist.org/search/sys?query=laptop" target="_blank" alt="Orange County" src="https://www.ocregister.com/wp-content/uploads/2018/05/housing-lede_.jpg?w=620" />
          <p className="city">Orange County, CA</p>
        </Col>
        <Col className="markImg" xs={12} md={4}>
          <Thumbnail href="https://washingtondc.craigslist.org/search/sya?query=laptop" target="_blank" alt="Washington DC" src="https://kids.nationalgeographic.com/content/dam/kids/photos/States/O-W/washington-dc-capitol.ngsversion.1435610747994.jpg" />
          <p className="city">Washington, DC (DC metro area)</p>
        </Col>
      </Row>
    </Grid>
  );
}

export default marketcarousel;
