import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    const { contact } = this.props
      return (
        <Col className='Contact'>
            <Row>
                <Image className='shadow' src={contact.src} alt={`${contact.name} logo`} />
                <span>{contact.name}</span>
            </Row>
        </Col>
      );     
  }
}

export default Contact;
