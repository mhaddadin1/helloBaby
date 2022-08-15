import React from "react";
import "./style.css";
import { Nav, Navbar } from "react-bootstrap";
import Auth from "../../utils/auth";

import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  if (Auth.loggedIn()) {
    return (
      <Navbar
        className="nav1"
        collapseOnSelect
        expand={false}
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand className="nav2" href="/profile">
          HelloBaby
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/logs">Log Feeding</Nav.Link>
            <Nav.Link href="/login" onClick={() => Auth.logout()}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        className="nav1"
        collapseOnSelect
        expand={false}
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/profile">HelloBaby</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
            {/* <Nav.Link href="/logs">Log Feeding</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default Menu;
