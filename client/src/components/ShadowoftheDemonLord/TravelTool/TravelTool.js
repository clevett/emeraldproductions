import React from 'react'

import { Container, Col, Row, CardGroup } from 'react-bootstrap'
import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'

import threat from  './data/threat.js'
import conditions from  './data/conditions.js'
import encounter from  './data/encounter.js'
import terrain from  './data/terrain.js'
import weather from  './data/weather.js'

class TravelTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			threat, 
			conditions,
			encounter,
			terrain,
			weather
    }
  }

  componentDidMount = () => this.loadData()

  loadData = async () => {
		console.log(this.state)
	}
	
	render() {
		return (
      <Container className="TravelTool content text-white">
        <RPGHeader title='Travel Tool' />
        <Row className='content'>
					<CardGroup className='mb-5 w-100'>
						<TravelCard title='Miles per Hour' result='3' />
						<TravelCard title='Hours of Travel' result='1' />
					</CardGroup>
				</Row>
				<Row className='content w-100'>
					<Col>
						<h2>Terrain</h2>
					</Col>
					<Col>
						<h2>Weather</h2>
						<select></select>
					</Col>
					<Col>
						<h2>Pace</h2>
						<select></select>
					</Col>
					<Col>
						<h2>Miles to Travel</h2>
						<input type='number' />
					</Col>
				</Row>
				<Row className='content mt-5'>
					<CardGroup className='mb-5 w-100'>
						<TravelCard title='Random Encounter' result='Harmless' />
						<TravelCard title='Getting Lost' result='On track' />
					</CardGroup>
					<Row className='content w-100'>
						<Col>
							<h2>Threat Level</h2>
						</Col>
						<Col>
							<h2>Navigator</h2>
						</Col>
					</Row>
				</Row>
			</Container>
		)
	}
}

export default TravelTool