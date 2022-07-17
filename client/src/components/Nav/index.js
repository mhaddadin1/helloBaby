import React from "react";
import "./style.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <Navbar
      className="nav1"
      collapseOnSelect
      expand={false}
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/profile">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        HelloBaby
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/logs">Log Feeding</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
