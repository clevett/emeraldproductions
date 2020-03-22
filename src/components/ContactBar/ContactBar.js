import React from 'react';

import Contact from '../Contact/Contact'
import { Container, Row } from 'react-bootstrap';

import './ContactBar.css';

export class ContactBar extends React.Component {
  render() {
    return (
        <Container className="mx-auto">
            <Row className="ContactBar bg-secondary contact-bar text-white font-weight-bold mt-4">
                {
                this.props.contacts.map(contact => <Contact contact={contact} />)
                }
            </Row>
        </Container>
    )
  }
}

export default ContactBar;