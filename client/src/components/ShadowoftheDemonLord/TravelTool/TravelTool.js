import React from 'react'

import { Container, Col, Row, CardGroup } from 'react-bootstrap'

import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'
import Weather from './Weather/Weather'
import Pace from './Pace/Pace'
import Threat from './Threat/Threat'

import threat from  './data/threat.js'
import conditions from  './data/conditions.js'
import encounter from  './data/encounter.js'
import terrain from  './data/terrain.js'

//Images & Styling
import './TravelTool.scss'

class TravelTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			conditions,
			encounter,
			terrain,

			weatherMultiplier: 1,

			milesPerHour: 3,
			milesPerDay: 24,

			hoursOfTravel: 1,

			threat: "Moderate"
    }
  }

  componentDidMount = () => this.loadData()

  loadData = async () => {
		console.log(this.state)
	}
	
	onSelectValueChange = async (key, value) => {
		await this.setState({[`${key}`]: value})
		console.log(this.state)
	}

	render() {
		return (
      <Container className="TravelTool content text-white">
        <RPGHeader title='Travel Tool' />
        <Row className='content'>
					<CardGroup className='mb-5 w-100'>
						<TravelCard title='Miles per Hour' result={this.state.milesPerHour} />
						<TravelCard title='Hours of Travel' result={this.state.hoursOfTravel} />
					</CardGroup>
				</Row>
				<Row className='content w-100'>
					<Col>
						<h2>Terrain</h2>
					</Col>
					<Weather onSelectValueChange={this.onSelectValueChange} />
					<Pace className='pace' onSelectValueChange={this.onSelectValueChange} />
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
						<Threat onSelectValueChange={this.onSelectValueChange} />
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