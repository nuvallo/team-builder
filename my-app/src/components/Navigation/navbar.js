import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navigation() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Team Builder Form</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
