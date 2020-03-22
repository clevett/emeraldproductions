import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../imgs/logo.png'

class Navigation extends React.Component {
    render() {
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
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="text-white font-weight-bold" activeKey="/home">
                    <NavDropdown className='text-white font-weight-bold' title="RPGs" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">Roll20</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.1">Shadowrun</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='text-white font-weight-bold' href="#about">About</Nav.Link>
                    <Nav.Link className='text-white font-weight-bold' href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation