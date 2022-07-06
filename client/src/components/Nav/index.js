import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./style.css";

// import { Component } from "react";
const Navbar = () => {
  return (
    <div className="nav1">
      <Nav className="nav2">
        <Nav.Item>
          <Nav.Link href="/summary">Summary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/logs">Logs</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
