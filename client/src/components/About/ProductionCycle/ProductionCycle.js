import React from 'react'
import { Container, Row, Col, Image, CardDeck } from 'react-bootstrap'
import ProductionStep from '../ProductionStep/ProductionStep'

import cycle from './productioncycle.png'

const cycleSteps = [
  {
    name: 'Understand',
    description: 'Known the challenge then research potential solutions.'
  },
  {
    name: 'Design',
    description: 'Create a solution to the problem. wokr through the four stages of design: sketch, mockup, prototype, and refine.'
  }, {
    name: 'User Testing',
    description: 'Know the journey of your users. Create solutions based on the experiences of real people.'
  }
]

const cycleSteps1 = [
 {
    name: 'Evaluate',
    description: 'Assess the testing for additional obstacles on your users path of usability.'
  }, {
    name: 'Develop',
    description: 'PRogramwith confidence on a foundation of data driven design.'
  }, {
    name: 'Test',
    description: 'From unit testing to qaulity assurance create confidence in the code base on the product.'
  }
]

class ProductionCycle extends React.Component {
  render() {
    return (
      <section className='ProductionCycle bg-primary'>
        <Container className='pt-5'>
          <h2>Production Cycle</h2>
          <Row>
            <Col>
              <Image src={cycle}></Image>
            </Col>
            <Col>
              <CardDeck md={4}>
                {
                  cycleSteps.map(step => <ProductionStep key={step.name} step={step} />)
                }
              </CardDeck>
              <CardDeck md={8}>
                {
                  cycleSteps1.map(step => <ProductionStep key={step.name} step={step} />)
                }
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default ProductionCycle