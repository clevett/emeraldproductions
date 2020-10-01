import React from 'react'
import { Card } from 'react-bootstrap'

class ProductionStep extends React.Component {
  render() {
    const { step } = this.props
      return (
        <Card className='bg-primary' border="dark" style={{ width: '18rem' }}>
          <Card.Body className='text-left'>
            <Card.Title className='font-weight-bold'>{step.name}</Card.Title>
            <Card.Text>{step.description}</Card.Text>
          </Card.Body>
        </Card>
      )
  }
}

export default ProductionStep
