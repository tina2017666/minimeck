import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Project MiniMek</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to="/infor">Unit Infor</Link>
            </NavItem>
            <NavItem>
              <Link to="/list">Pilot</Link>
            </NavItem>
            <NavItem>
              <Link to="/mech">Mechs</Link>
            </NavItem>
            <NavItem>
              <Link to="/org">Orgnization Info</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
