import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Banner = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Kittens and Bears</h1>
          <p className="lead">Bla bla bla</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Banner;