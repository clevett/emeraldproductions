import React from 'react'

import portrait from '../../../imgs/takedown.png'

import { Row, Col, Image } from 'react-bootstrap'

import './AboutCenter.scss'

const AboutCenter = () => {
  return (
    <Row className='AboutCenter d-flex align-items-center mt-5 mb-5'>
      <Col className='col-12 col-md-6 portrait'>
        <Image className='box-shadow' src={portrait} alt='A woman with short hair wearing a jacket over a super hero costume looks to the sky' />
      </Col>
      <Col className='col-12 col-md-6 text-left description mt-5'>
        <h1>Cassie Levett</h1>
        <span className='font-italic'>Front-End Developer</span>
        <p className='mt-3'>Building solutions one challenge at a time.</p>
      </Col>
    </Row>
  )
}

export default AboutCenter