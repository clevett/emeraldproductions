import React from 'react'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'

class ContactForm extends React.Component {
  render() {
    return (
      <section className='Center d-flex align-items-center bg-primary'>
        <Container>
          <Row>
            <h1>Contact Me</h1>
          </Row>
          <Row>
            <p className='mt-3'>Contact me if you have any questions, comments, or feedback.</p>
          </Row>
          <Form>
            <Form.Row>
              <Form.Group className='text-left' as={Col} controlId="formGridName">
                <Form.Label className='text-left'>Name*</Form.Label>
                <Form.Control type="name" placeholder="Enter name" required />
              </Form.Group>
              <Form.Group className='text-left' as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className='text-left' as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message*</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form.Row>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </section>
    )
  }
}

export default ContactForm