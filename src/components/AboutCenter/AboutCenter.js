import React from 'react'

import portrait from '../../imgs/takedown.png'

import { Container, Row, Col, Image } from 'react-bootstrap'

import './AboutCenter.scss'

class AboutCenter extends React.Component {
  render() {
    return (
      <section className='Center d-flex align-items-center bg-primary'>
        <Container>
            <Row className="d-flex justify-content-around flex-wrap">
              <Col xs={6} className='portrait'>
                <Image className='box-shadow' src={portrait} alt='super hero known as Takedown' />
              </Col>
              <Col xs={6} className='text-left description mt-5'>
                  <h1>Cassie Levett</h1>
                  <span className='font-italic'>Front-End Developer</span>
                  <p className='mt-3'>Building solutions one challenge at a time.</p>
              </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutCenter