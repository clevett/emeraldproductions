import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../imgs/logo.png'

import './Navigation.css'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar className='navbar-thicker' bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="250"
                height="100"
                className="d-inline-block align-top"
                alt="Emerald Productions, LLC"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="text-white font-weight-bold" activeKey="/home">
                    <Nav.Link className='text-white font-weight-bold' href="#about">About</Nav.Link>
                    <NavDropdown className='text-white font-weight-bold ml-5' title="RPGs" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">Roll20</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.1">Shadowrun</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='text-white font-weight-bold ml-5' href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation