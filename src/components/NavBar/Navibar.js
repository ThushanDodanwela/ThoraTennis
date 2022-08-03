import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavIcon from "../../assets/Logo1.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";

import "./Navibar.css";

function Navibar() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className="class_theme" variant="dark" expand="sm" fixed="top">
      <Container classname="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#HOME">
            <Link to="HOME" smooth={true} duration={200}>
              <img
                src={NavIcon}
                width="auto"
                height="50"
                className="d-inline-block align-top"
                alt="Thora Tennis Academy"
              />
            </Link>
          </Navbar.Brand>
          <Nav className=" ms-auto">
            <Nav.Link className="ml-auto" />
            <Link to="HOME" smooth={true} duration={200}>
              <Nav.Link href="#HOME">Home</Nav.Link>
            </Link>
            <Nav.Link className="ml-auto" />
            <Link to="ABOUT" smooth={true} duration={200}>
              <Nav.Link href="#ABOUT">About</Nav.Link>
            </Link>
            <Nav.Link className="ml-auto" />
            <Link to="GALLERY" smooth={true} duration={200}>
              <Nav.Link href="#GALLERY">Gallery</Nav.Link>
            </Link>
            <Nav.Link className="ml-auto" />
            <Link to="NEWS" smooth={true} duration={200}>
              <Nav.Link href="#NEWS">News</Nav.Link>
            </Link>
            <Nav.Link className="ml-auto" />
            <Link to="FAQ" smooth={true} duration={200}>
              <Nav.Link href="#FAQ">FAQ</Nav.Link>
            </Link>
            <Nav.Link className="ml-auto" />
            <Link to="COACH" smooth={true} duration={200}>
              <Nav.Link href="#COACH">Coach</Nav.Link>
            </Link>
          </Nav>

          <Button href="" variant="outline-success" className="ms-auto">
            Reserve Court
          </Button>

          <Nav className="ms-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#reg#">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
