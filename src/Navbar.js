import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa"; 
import logo from "./assets/logo-dev.png";

const NavigationBar = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm px-3">
      <Container fluid>
      <Navbar.Brand as={Link} to="/" className="fw-bold">
  <span style={{ color: "black", fontWeight: "bold" }}>smart </span>
  <span style={{ color: "red", fontWeight: "bold" }}>Recruit</span>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/artis" className="fw-semibold">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/artEvent" className="fw-semibold">
              Employer
            </Nav.Link>
            <Nav.Link as={Link} to="/artMarket" className="fw-semibold">
              Partner
            </Nav.Link>
            <NavDropdown title="Candidates" id="nav-dropdown">   
            </NavDropdown>

            <NavDropdown title="Resources" id="nav-dropdown">   
            </NavDropdown> 
          </Nav>



          {/* Right-Side Links */}
          <Nav className="ms-auto align-items-center">
           
            <Nav.Link as={Link} to="/contactUs" className="fw-semibold">
              Contact
            </Nav.Link>

            
            <NavDropdown title={<img src="path/to/flag_logo.png" alt="Flag" width="28" />} id="flag-dropdown">
  <NavDropdown.Item as={Link} to="/bangladesh">
    <img src="path/to/bangladesh_flag.png" alt="Bangladesh" width="20" className="me-2" />
    Bangladesh
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/india">
    <img src="path/to/india_flag.png" alt="India" width="20" className="me-2" />
    India
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/us">
    <img src="path/to/us_flag.png" alt="US" width="20" className="me-2" />
    United States
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/uk">
    <img src="path/to/uk_flag.png" alt="UK" width="20" className="me-2" />
    United Kingdom
  </NavDropdown.Item>
</NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
