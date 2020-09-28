import React from 'react'

import { Container, Row, CardGroup, Col } from 'react-bootstrap'

import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'
import Weather from './Weather/Weather'
import Pace from './Pace/Pace'
import Terrain from './Terrain/Terrain'
import MilesToTravel from './MilesToTravel/MilesToTravel'

import conditions from  './data/conditions.js'
import encounter from  './data/encounter.js'

import { combineMultipliers } from './calculateMultiplier/calculateMultiplier'
import { adjustedSpeed } from './calculateSpeed/calculateSpeed'
import { determineTravelTime } from './determineTravelTime/determineTravelTime'

//Images & Styling
import './TravelTool.scss'

class TravelTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			conditions,
			encounter,
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
			//Time to Travel
			milesToTravel: 30,
			travelTime: '1 day, 2 hours',
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

		if (key.includes('miles') || key === 'terrain' || key === 'weather') {
			const adjustedMilesPerHour = adjustedSpeed(this.state.milesPerHour, this.state.multiplier)
			await this.setState({
				adjustedMilesPerHour,
				adjustedMilesPerDay: adjustedSpeed(this.state.milesPerDay, this.state.multiplier),
				travelTime: determineTravelTime(adjustedMilesPerHour, this.state.milesToTravel)
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
						<TravelCard title={`Time to Travel ${this.state.milesToTravel} Miles`} result={this.state.travelTime} />
					</CardGroup>
					<Terrain onSelectValueChange={this.onValueChange} />
					<Col>
						<Weather onSelectValueChange={this.onValueChange} />
						<Pace className='pace' onSelectValueChange={this.onValueChange} />
					</Col>
					<MilesToTravel onChange={this.onValueChange} />
				</Row>
			</Container>
		)
	}
}

export default TravelTool