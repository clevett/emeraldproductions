import React from 'react'

import { Container, Col, Row, CardGroup } from 'react-bootstrap'

import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'
import Weather from './Weather/Weather'

import threat from  './data/threat.js'
import conditions from  './data/conditions.js'
import encounter from  './data/encounter.js'
import terrain from  './data/terrain.js'
import pace from  './data/pace.js'

//Images & Styling
import './TravelTool.scss'

class TravelTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			threat, 
			conditions,
			encounter,
			terrain,

			weatherModifier: 1,

			threatOptions: threat.map(object => object.name) || [],
			threatSelected: 'Moderate',

			paceOptions: pace.map(object => object.name) || [],
			paceSelected: 'walk',
			paceModifier: 3,

			milesPerHour: 3,
			hoursOfTravel: 1
    }
  }

  componentDidMount = () => this.loadData()

  loadData = async () => {
		console.log(this.state)
	}
	
	onSelectValueChange = (key, value) => this.setState({[`${key}`]: value})

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
					<Col className='pace'>
						<h2>Pace</h2>
						{/* <SelectBuilder options={this.state.paceOptions} selected={this.state.paceSelected} onSelectValueChange={this.onSelectValueChange} /> */}
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
							{/* <SelectBuilder options={this.state.threatOptions} selected={this.state.threatSelected} onSelectValueChange={this.onSelectValueChange} /> */}
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