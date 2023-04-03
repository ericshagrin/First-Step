import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo_no_text from './logo_no_text.png';
import './../index.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Check if current location is home page or root URL
  const isHome = location.pathname === '/' || location.pathname === '/HomePage';

  return (
    <Navbar bg="light" expand="lg" className="header with-bg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo_no_text}
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="Nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/question1" className="Nav-link">
            {isHome ? 'Find Your Resource' : 'Restart The Process'}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


