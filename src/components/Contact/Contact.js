import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap'

class Contact extends React.Component {
  render() {
    const { contact } = this.props
      return (
        <Col className='Contact'>
            <Row>
              <Col className='m-auto'>
                <a className='text-white' href={contact.href}>
                  <Image className='shadow mr-2' src={contact.src} alt={`${contact.name} logo`} />
                  <span>{contact.name}</span>
                </a>
              </Col>
            </Row>
        </Col>
      );     
  }
}

export default Contact