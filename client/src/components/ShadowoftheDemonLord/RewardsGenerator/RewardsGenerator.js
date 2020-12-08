import React, { useState } from 'react'
import { Container, Row, CardGroup } from 'react-bootstrap'

import Header from '../RPGHeader/RPGHeader'
import DisplayCard from '../DisplayCard/DisplayCard'

import data from './data/treasure_limits'

const RewardsGenerator = () => {

  return(
    <Container className='RewardsGenerator content text-white'>
      <Header title='Rewards Generator' />
      <Row>
        <CardGroup className='mb-5 w-100'>
          <DisplayCard title='Employer' result={this.state.employer} />
          <DisplayCard title='Meet Location' result={this.state.location} />
          <DisplayCard title='Job Type' result={this.state.job} />
        </CardGroup>
      </Row>
    </Container>
  )
}

export default RewardsGenerator