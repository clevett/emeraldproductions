import React from 'react'

import { Container, Row, CardGroup } from 'react-bootstrap'

import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'
import Weather from './Weather/Weather'
import Pace from './Pace/Pace'
import Terrain from './Terrain/Terrain'

import conditions from  './data/conditions.js'
import encounter from  './data/encounter.js'

import { combineMultipliers } from './calculateMultiplier/calculateMultiplier'
import { adjustedSpeed } from './calculateSpeed/calculateSpeed'

//Images & Styling
import './TravelTool.scss'

class TravelTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			conditions,
			encounter,
			//Pace
			pace: 3,
			//Travel Modifiers
			weather: 1,
			terrain: 1,
			multiplier: 1,
			//Travel Distance
			miles: 3,
			milesPerHour: 3,
			milesPerDay: 24,
			adjustedMilesPerHour: 3,
			adjustedMilesPerDay: 24,
			//Threat
			threat: "Moderate",
		}
		
		this.onValueChange = this.onValueChange.bind(this)
  }

	onValueChange = async (key, value) => {
		await this.setState({[`${key}`]: value})
		
		if (key === 'weather' || key === 'terrain') {
			await this.setState({
				multiplier: combineMultipliers(this.state.terrain, this.state.weather)
			})
		}

		if (key === 'pace' || key === 'terrain' || key === 'weather') {
			const milesPerHour = await adjustedSpeed(this.state.milesPerHour, this.state.multiplier)
			const milesPerDay = await adjustedSpeed(this.state.milesPerDay, this.state.multiplier)
			await this.setState({
				adjustedMilesPerHour: milesPerHour,
				adjustedMilesPerDay: milesPerDay
			})
		}
	}

	render() {
		return (
      <Container className="TravelTool content text-white">
        <RPGHeader title='Travel Tool' />

        <Row className='content mb-5 w-100'>
					<Row className='w-100 text-center'>
						<h2 className='w-100 text-center mb-3'>Speed Calculator</h2>
					</Row>
					<CardGroup className='mb-3 w-100'>
						<TravelCard title='Miles per Hour' result={this.state.adjustedMilesPerHour} />
						<TravelCard title='Miles per Day' result={this.state.adjustedMilesPerDay} />
					</CardGroup>
					<Terrain onSelectValueChange={this.onValueChange} />
					<Weather onSelectValueChange={this.onValueChange} />
					<Pace className='pace' onSelectValueChange={this.onValueChange} />
				</Row>
			</Container>
		)
	}
}

export default TravelTool