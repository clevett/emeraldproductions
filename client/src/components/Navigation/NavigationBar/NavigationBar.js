import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../../imgs/logo.png'
import './NavigationBar.scss'

import NavigationLink from '../NavigationLink/NavigationLink'

const NavigationBar = () => {
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
						<label>Five Torches Deep</label>
						<NavDropdown.Item href="/five_torches_deep/5e_monsters">5th Edition Monsters</NavDropdown.Item>
						<NavDropdown.Item href="/five_torches_deep/random_map_generator">Random Map Generator</NavDropdown.Item>
						<NavDropdown.Divider />
						<label>Shadow of the Demon Lord</label>
						<NavDropdown.Item href="/shadow_of_the_demon_lord/encounter_builder">Encounter Builder</NavDropdown.Item>
						<NavDropdown.Item href="/shadow_of_the_demon_lord/rewards_generator">Rewards Generator</NavDropdown.Item>
						<NavDropdown.Item href="/shadow_of_the_demon_lord/travel_tool">Travel Tool</NavDropdown.Item>
						<NavDropdown.Divider />
						<label>Shadowrun 5th Edition</label>
						<NavDropdown.Item href="/shadowrun/mission_creation">Mission Generator</NavDropdown.Item>
						<NavDropdown.Item href="/shadowrun/rewards_calculator">Rewards Calculator</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown className='text-white font-weight-bold mr-5' title="Roll 20" id="basic-nav-dropdown-roll-20">
						<NavDropdown.Item href="/roll_20_character_sheets">Character Sheets</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavigationBar