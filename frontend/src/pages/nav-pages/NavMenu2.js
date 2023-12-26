import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavMenu2() {
    return(
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/tests" data-bs-toggle="tooltip" title="All the Tests are listed here!"> Tests </Nav.Link>
          <NavDropdown title="Services" id={`offcanvasNavbarDropdown-expand-xl`}>
            <NavDropdown.Item href="/radiology-services"> Radiology Services </NavDropdown.Item>
            <NavDropdown.Item href="/fetal-medicine-unit"> Fetal Medicine Unit </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/health-conditions">  Health Conditions </Nav.Link>
          <Nav.Link href="/packages">  Packages </Nav.Link>
          <Nav.Link href="/nearest-centers">  Nearest Centers </Nav.Link>
          <Nav.Link href="/about">  About Us </Nav.Link>
          <Nav.Link href="/partner-with-us">  Partner With Us </Nav.Link>
          <Nav.Link href="/contact-us">  Contact Us </Nav.Link>
        </Nav>
    )
}
