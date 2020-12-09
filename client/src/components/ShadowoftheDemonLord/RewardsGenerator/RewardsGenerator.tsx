import React, { useState } from 'react'
import { Container, Col, Row, CardGroup } from 'react-bootstrap'

import Header from '../RPGHeader/RPGHeader'
import DisplayCard from '../DisplayCard/DisplayCard'
import SelectBuilder from '../../SelectBuilder/SelectBuilder'

import buildResultStringFrom from './helpers/buildResultString'

import Treasure from './helpers/Treasure'

const RewardsGenerator = () => {
  const levels = ['starting', 'novice', 'expert', 'master']
  const [ groupLevel, setLevel ] = useState('novice')
  const [ goldPerLevel, setGoldPerLevel ] = useState(5)
  const [ result, setResult ] = useState('')

  const onSelectValueChange = (level:string):void => {
    const treasure = new Treasure(level)
    setLevel(level)
    setGoldPerLevel(treasure.gold)

    setResult( buildResultStringFrom(treasure.gold, treasure.deleteNullCoins()) )
  }

  const captalizeWord = () => `${groupLevel.charAt(0).toUpperCase()}${groupLevel.slice(1)}`

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