import React from 'react'

import Contact from './Contact/Contact'
import { Container, Row } from 'react-bootstrap'

import './ContactBar.scss'

import discord  from './Discord-Icon.png'
import github  from './GitHub-Icon.png'
import linkedIn  from './LinkedIN-Icon.png'
const contacts = [{name: 'GitHub', src:github, href:'https://github.com/clevett'}, {name: 'Necoya #7621', src:discord}, {name: 'LinkedIN', src: linkedIn, href:'https://www.linkedin.com/in/cassie-levett-65029818/'}]

class ContactBar extends React.Component {
  render() {
		return (
			<section>
				<Container className="mx-auto">
					<Row className="ContactBar bg-secondary contact-bar text-white font-weight-bold p-4">
						{
						contacts.map(contact => <Contact key={contact.name} contact={contact} />)
						}
					</Row>
				</Container>
			</section>
		)
  }
}

export default ContactBar