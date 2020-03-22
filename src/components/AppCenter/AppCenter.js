import React from 'react'

import portrait from '../../imgs/takedown.png'

import { Container, Row, Col, Image } from 'react-bootstrap'

class AppCenter extends React.Component {
  render() {
    return (
      <Row className='Center bg-primary'>
        <Container>
          <Row className="">
            <Col xs={6} md={7} className='portrait'>
              <Image className='box-shadow' src={portrait} alt='super hero known as Takedown' />
            </Col>
            <Col xs={6} md={5} className='text-left'>
              <section className='description text-white mt-5'>
                <h1>Cassie Levett</h1>
                <h2>Front-End Developer</h2>
                <span>Building solutions one challenge at a time.</span>
              </section>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}


export default AppCenter