import React from 'react';

import Contact from '../Contact/Contact'
import { Row } from 'react-bootstrap';

export class ContactBar extends React.Component {
  render() {
    return (
        <Row className="ContactBar bg-secondary contact-bar text-white font-weight-bold">
            {
            this.props.contacts.map(contact => <Contact contact={contact} />)
            }
        </Row>
    )
  }
}

export default ContactBar;