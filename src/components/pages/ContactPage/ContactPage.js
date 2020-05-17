import React from 'react'
import { Container, Row } from 'react-bootstrap'

import ContactForm from '../../ContactForm/ContactForm'

//d-flex align-items-center

class ContactPage extends React.Component {
  render() {
    return (
      <Container className='ContactPage text-white mt-5'>
        <Row>
          <h1>Contact Me</h1>
        </Row>
        <Row>
          <p className='mt-3'>Contact me if you have any questions, comments, or feedback.</p>
        </Row>
        <ContactForm />
      </Container>
    )
  }
}

export default ContactPage