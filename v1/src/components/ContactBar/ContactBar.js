import React from 'react'

import Contact from './Contact/Contact'
import { Row } from 'react-bootstrap'

import './ContactBar.scss'

import contacts from './data/contact_information'

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