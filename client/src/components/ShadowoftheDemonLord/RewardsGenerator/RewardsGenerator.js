import React, { useState } from 'react'
import { Container, Col, Row, CardGroup } from 'react-bootstrap'

import Header from '../RPGHeader/RPGHeader'
import DisplayCard from '../DisplayCard/DisplayCard'
import SelectBuilder from '../../SelectBuilder/SelectBuilder'

import data from './data/treasure_limits'

const RewardsGenerator = () => {
  const levels = ['starting', 'novice', 'expert', 'master']
  const levelSelected = 'novice'
  const goldPerLevel = 1

  const onSelectValueChange = event => {
    console.log(event)
  }

  return(
    <Container className='RewardsGenerator content text-white'>
      <Header title='Rewards Generator' />
      <Row>
        <CardGroup className='mb-5 w-100'>
          <DisplayCard title='Rewards' result={`${goldPerLevel} gc`} />
        </CardGroup>
      </Row>
      <Row>
        <Col>
          <h3>Level</h3>
          <SelectBuilder
            id="sodl-rewards-level"
            label="select character level"
            options={levels} 
            selected={levelSelected} 
            onSelectValueChange={onSelectValueChange} 
          />
        </Col>
      </Row>
    </Container>
  )
}

export default RewardsGenerator