import React from 'react'

import { Row, CardGroup } from 'react-bootstrap'
import DisplayCard from '../../DisplayCard/DisplayCard'

const ResultsDisplays = ({karma, nuyen}) => {
  return (
    <Row className='content'>
    <CardGroup className='w-100'>
      <DisplayCard title='Nuyen Rewards' result={{description: `${nuyen}¥`}} />
      <DisplayCard title='Karma Rewards' result={{description: karma}} />
    </CardGroup>
  </Row>
  )
}

export default ResultsDisplays