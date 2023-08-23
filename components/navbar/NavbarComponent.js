import Image from "next/image";
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar className="navbar bg-dark">
      <Container className="fluid">
        <Navbar.Brand href="/" className="navbar-brand text-white">
          <Image
            alt=""
            src="/PowerSageLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp; Power Sage
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="/calculate" className="text-white">
              Calculate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
            Signed in as: Prerana V
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
