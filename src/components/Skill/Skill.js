import React from 'react'
import Image from 'react-bootstrap/Image'
import { Card } from 'react-bootstrap'

import './Skill.css'

class Skill extends React.Component {
  render() {
    const { skill } = this.props
      return (
        <Card className='bg-dark'>
          <Card.Img className='m0auto' variant="top" src={skill.src} />
          <Card.Body className='text-left'>
            <Card.Title className='font-weight-bold'>{skill.name}</Card.Title>
            <Card.Text>{skill.description}</Card.Text>
          </Card.Body>
        </Card>
      )
  }
}

export default Skill
