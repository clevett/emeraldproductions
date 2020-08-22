
import React from 'react'

import { Container, Col, Row, } from 'react-bootstrap'

//Images & Styling
import dragon from '../dragon.png'
import './MissionCreation.scss'

class MissionCreation extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      // beasts: [],
      // search: [],
      // searchStatus: 'loading',
      // selected: [],
      // selectedLevel: 'novice',
      // levelOptions: ['starting', 'novice', 'expert', 'master'],
      // difficulty: 0,
      // difficultyOptions: [1, 5, 10, 25, 50, 100, 250, 500]
    }
	}
	
	render() {
		return (
      <Container className="ShadowrunMissionCreation content text-white">
        <Row className='header text-center mb-3 justify-content-center w-100'>
          <img alt='shadowrun dragon logo' src={dragon}></img>
          <a href='https://www.drivethrurpg.com/product/115985/Shadowrun-Fifth-Edition-Core-Rulebook-Master-Index-Edition?affiliate_id=879798' target="_blank">Shadowrun</a>
          <h1 className='mb-0'>Mission Creation</h1>
          <img alt='shadowrun dragon logo' src={dragon}></img>
        </Row>
			</Container>
		)
	}
}

export default MissionCreation