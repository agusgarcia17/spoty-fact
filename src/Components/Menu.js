import React, { Component } from 'react';
import {
  Col,
  Input,
  Navbar,
} from 'reactstrap';


class Menu extends Component {
  render() {
    return (
          <Navbar color="dark" light expand="md">
            <Col md={6}>
              <Input placeholder="Search" />
            </Col>
          </Navbar>

    );
  }
}

export default Menu;
