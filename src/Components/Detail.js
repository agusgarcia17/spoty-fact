import React, { Component } from 'react';
import {
  Col, Container, Row, Jumbotron
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu';

class Detail extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Container>
          <Row>
            <Col>
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Details</h1>
                  <p className="lead">Bla bla bla</p>
                </Container>
              </Jumbotron>
              <div>

                <Link to='/'>Back</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Detail;
