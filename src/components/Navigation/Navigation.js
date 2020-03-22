import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../imgs/logo.png';

export function Navigation() {
    return (
        <Navbar className='navbar-thicker' bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="Emerald Productions, LLC"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end text-white font-weight-bold" activeKey="/home">
                <Nav.Link className='text-white font-weight-bold' href="#home">About</Nav.Link>
                <Nav.Link className='text-white font-weight-bold' href="#link">Contact</Nav.Link>
                <NavDropdown className='text-white font-weight-bold' title="RPGs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Roll20</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">Shadowrun</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}