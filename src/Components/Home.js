import React, { Component } from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Navigation from './Navigation';
import Menu from './Menu';
import {
  Col, Container, Row
} from 'reactstrap';
import Playlist from './Playlist';

class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Container fluid>
          <Row>
            <Col md={3}>
              <Navigation />
              <hr/>
              <Playlist/>
            </Col>
            <Col md={9}>
              <Banner />
              <Gallery />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
