import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavIcon from "../../assets/Logo1.png";
import Button from "react-bootstrap/Button";

import "./Navibar.css";

function Navibar() {
  return (
    <Navbar className="class_theme" variant="dark" expand="sm">
      <Container classname="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">
            <img
              src={NavIcon}
              width="auto"
              height="50"
              className="d-inline-block align-top"
              alt="Thora Tennis Academy"
            />
          </Navbar.Brand>
          <Nav className=" ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav.Link href="#coach">Coach</Nav.Link>
          </Nav>

          <Nav>
            <Button href="" variant="outline-success">
              Reserve Court
            </Button>
          </Nav>

          <Nav className="mr-4">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#reg#">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
