import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../../imgs/logo.png'
import './NavigationBar.scss'

import NavigationLink from '../NavigationLink/NavigationLink'

class NavigationBar extends React.Component {
	render() {
		return (
			<Navbar className='navbar-thicker py-3 px-5' bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="/">
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
						<NavigationLink reference={{name: 'About', href:'/'}} />
						<NavDropdown className='text-white font-weight-bold mr-5 rpg-tools' title="RPG Tools" id="basic-nav-dropdown-rpg-tools">
							<label>Shadow of the Demon Lord</label>
							<NavDropdown.Item href="/shadow_of_the_demon_lord/encounter_builder">Encounter Builder</NavDropdown.Item>
							<NavDropdown.Item href="/shadow_of_the_demon_lord/travel_tool">Travel Tool</NavDropdown.Item>
							<NavDropdown.Divider />
							<label>Shadowrun</label>
							<NavDropdown.Item href="/shadowrun/mission_creation">Mission Generator</NavDropdown.Item>
							<NavDropdown.Item href="/shadowrun/rewards_calculator">Rewards Calculator</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown className='text-white font-weight-bold mr-5' title="Roll 20" id="basic-nav-dropdown-roll-20">
							<NavDropdown.Item href="/roll_20_character_sheets">Character Sheets</NavDropdown.Item>
						</NavDropdown>
						<NavigationLink reference={{ name: 'Contact', href: '/contact' }} />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar