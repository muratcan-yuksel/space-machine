import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../styles/navbar.css";

const NavbarComponent = () => {
  return (
    <div className="navbarComponent">
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Space-Machine</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#mainComponent">Home</Nav.Link>
              <Nav.Link href="#introductionComponent">Introduction</Nav.Link>
              <Nav.Link href="#purposeComponent">Our Purpose</Nav.Link>
              <Nav.Link href="#whySolanaComponent">Why Solana?</Nav.Link>
              <Nav.Link href="#roadmapComponent">Roadmap</Nav.Link>
              <Nav.Link href="#faqComponent">FAQ</Nav.Link>
              <Nav.Link href="#theTeamComponent">The Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
