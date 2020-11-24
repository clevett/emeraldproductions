import React from 'react'

import Contact from './Contact/Contact'
import { Row } from 'react-bootstrap'

import './ContactBar.scss'

import discord  from './Discord-Icon.png'
import github  from './GitHub-Icon.png'
import linkedIn  from './LinkedIN-Icon.png'
const contacts = [
		{	name: 'GitHub', 
			src:github, 
			href:'https://github.com/clevett',
			alt: 'silhouette of an octapus cat hybrid'
		}, 
		{	name: 'Necoya #7621', 
			src:discord,
			alt: 'discord robot eyes in a chat bubble'
		}, 
		{	name: 'LinkedIN', 
			src: linkedIn, 
			href:'https://www.linkedin.com/in/cassie-levett-65029818/',
			alt: 'letters "i" "n" inside a box'
		}
	]

const ContactBar = () => {
	return (
	<Row className="ContactBar contact-bar text-white font-weight-bold p-4">
		{
			contacts.map(contact => <Contact key={contact.name} contact={contact} />)
		}
	</Row>
	)
}

export default ContactBar