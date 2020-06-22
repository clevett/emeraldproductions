import React from 'react'
import { Col } from 'react-bootstrap'

const DangerColumn = ({ header, range }) => {
  header = header === 'max' ? "Max. Creature Difficulty" : header
  return (
    <Col className='align-self-end'>
      <h3>{header}</h3>
      <span>{range}</span>
    </Col>
  )
}

export default DangerColumn