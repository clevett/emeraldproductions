import React, { useState } from 'react'
import { Container, Col, Row, CardGroup } from 'react-bootstrap'

import Header from '../RPGHeader/RPGHeader'
import DisplayCard from '../DisplayCard/DisplayCard'
import SelectBuilder from '../../SelectBuilder/SelectBuilder'

import treasure from './data/treasure'

const RewardsGenerator = () => {
  const levels = treasure.map(element => element.name)
  const [ groupLevel, setLevel ] = useState('novice')
  const [ goldPerLevel, setGoldPerLevel ] = useState(5)
  const [ result, setResult ] = useState(null)

  const onSelectValueChange = (level:string):void => {
    const object = treasure.find(element => element.name === level)
    const total = object && object.gold ? object.gold : 0
    setGoldPerLevel(total)
    setLevel(level)
  }

  const captalizeWord = () => groupLevel.charAt(0).toUpperCase() + groupLevel.slice(1)

  return(
    <Container className='RewardsGenerator content text-white'>
      <Header title='Rewards Generator' />
      <Row>
        <CardGroup className='mb-5 w-100'>
          <DisplayCard 
            title={`Treasure per Level for ${captalizeWord()} totals ${goldPerLevel} gc`} 
            result={`${result}`} 
          />
        </CardGroup>
      </Row>
      <Row>
        <Col>
          <h3>Level</h3>
          <SelectBuilder
            id="sodl-rewards-level"
            label="select character level"
            options={levels} 
            selected='novice'
            onSelectValueChange={onSelectValueChange} 
          />
        </Col>
      </Row>
    </Container>
  )
}

export default RewardsGenerator