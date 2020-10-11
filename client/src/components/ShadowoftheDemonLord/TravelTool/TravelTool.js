import React from 'react'

import { Container, Row, CardGroup, Col } from 'react-bootstrap'

import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'
import Weather from './Weather/Weather'
import Pace from './Pace/Pace'
import Terrain from './Terrain/Terrain'
import MilesToTravel from './MilesToTravel/MilesToTravel'
import RandomEncounters from './RandomEncounters/RandomEncounters'
import GettingLost from './GettingLost/GettingLost'

import { combineMultipliers } from './helpers/calculateMultiplier/calculateMultiplier'
import { adjustedSpeed } from './helpers/calculateSpeed/calculateSpeed'
import { determineTravelTime } from './helpers/determineTravelTime/determineTravelTime'

//Images & Styling
import './TravelTool.scss'
class TravelTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			//Travel Modifiers
			weather: 1,
			terrain: 1,
			multiplier: 1,
			activeTerrain: [],
			activeWeather: "Normal conditions",
			conditions: [],
			//Travel Distance
			miles: 3,
			milesPerHour: 3,
			milesPerDay: 24,
			adjustedMilesPerHour: 3,
			adjustedMilesPerDay: 24,
			//Time to Travel
			milesToTravel: 30,
			travelTime: '1 day, 2 hours',
		}
		
		this.onValueChange = this.onValueChange.bind(this)
	}

	onValueChange = async (key, value) => {
		await this.setState({[`${key}`]: value})

		if (key === 'activeTerrain' || key === 'activeWeather') {
			await this.setState({
				conditions: [...this.state.activeTerrain, this.state.activeWeather]
			})
		}

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
					<CardGroup className='mb-3 w-100'>
						<TravelCard title='Miles per Hour' result={this.state.adjustedMilesPerHour} />
						<TravelCard title='Miles per Day' result={this.state.adjustedMilesPerDay} />
						<TravelCard title={`Time to Travel ${this.state.milesToTravel} Miles`} result={this.state.travelTime} />
					</CardGroup>
					<Row className='options w-100'>
						<Terrain onValueChange={this.onValueChange} />
						<Col>
							<Pace className='pace' onSelectValueChange={this.onValueChange} />
							<Weather onSelectValueChange={this.onValueChange} />
						</Col>
						<MilesToTravel onChange={this.onValueChange} />
					</Row>
				</Row>
				<Row className='content mt-2'>
					<RandomEncounters />
					<GettingLost key={this.state.conditions} conditions={this.state.conditions} />
				</Row>
			</Container>
		)
	}
}

export default TravelTool