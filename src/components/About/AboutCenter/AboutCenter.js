import React from 'react'

import portrait from '../../../imgs/takedown.png'

import { Row, Col, Image } from 'react-bootstrap'

import './AboutCenter.scss'

class AboutCenter extends React.Component {
  render() {
    return (
      <Row className='AboutCenter d-flex align-items-center mt-5 mb-5'>
          <Col xs={6} className='portrait'>
            <Image className='box-shadow' src={portrait} alt='super hero known as Takedown' />
          </Col>
          <Col xs={6} className='text-left description mt-5'>
            <h1>Cassie Levett</h1>
            <span className='font-italic'>Front-End Developer</span>
            <p className='mt-3'>Building solutions one challenge at a time.</p>
          </Col>
      </Row>
    );
  }
}

export default AboutCenter