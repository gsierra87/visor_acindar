import React, { Component } from "react";
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../../images/logo.png';

class NavBar extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="navbar__logo--link">
            <img
              alt=""
              src={logo}
              width="36px"
              height="25px"
              className="d-inline-block align-top"
            />{' '}
          <span className="navbar__logo--text">Testing 360 Viewer</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export {NavBar};