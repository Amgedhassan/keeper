import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
    <Navbar expand="lg">
      <Navbar.Brand><Link className="navbar-brand" to="/"><h1><HighlightIcon />Keeper</h1></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ul className="navbar-nav">
            <li><Link className="nav-link" to="/notes">My Notes</Link></li>
            <li><Link className="nav-link" to="/register">Sign up</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header >
  );
}

export default Header;