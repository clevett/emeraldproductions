import React from 'react'

import Contact from '../Contact/Contact'
import { Container, Row } from 'react-bootstrap'

import './ContactBar.css'

import discord  from '../../imgs/Discord-Icon.png'
import github  from '../../imgs/GitHub-Icon.png'
import linkedIn  from '../../imgs/LinkedIN-Icon.png'
const contacts = [{name: 'GitHub', src:github, href:'https://github.com/clevett'}, {name: 'Necoya #7621', src:discord}, {name: 'LinkedIN', src: linkedIn, href:'https://www.linkedin.com/in/cassie-levett-65029818/'}]

class ContactBar extends React.Component {
  render() {
		return (
			<section>
				<Container className="mx-auto">
					<Row className="ContactBar bg-secondary contact-bar text-white font-weight-bold p-4">
						{
						contacts.map(contact => <Contact contact={contact} />)
						}
					</Row>
				</Container>
			</section>
		)
  }
}

export default ContactBar