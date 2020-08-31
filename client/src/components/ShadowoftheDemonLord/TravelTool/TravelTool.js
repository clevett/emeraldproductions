import React from 'react'

import { Container, Col, Row, CardGroup, InputGroup, FormControl } from 'react-bootstrap'

import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'
import Weather from './Weather/Weather'
import Pace from './Pace/Pace'
import Threat from './Threat/Threat'
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
		
		this.handleChange = this.handleChange.bind(this)
		this.onValueChange = this.onValueChange.bind(this)
  }

  componentDidMount = () => this.loadData()

  loadData = async () => {
		console.log(this.state)
	}

	onValueChange = async (key, value) => {
		await this.setState({[`${key}`]: value})
		
		if (key === 'weather' || key === 'terrain') {
			await this.setState({
				multiplier: combineMultipliers(this.state.terrain, this.state.weather)
			})
		}

		if (key === 'pace' || key === 'terrain' || key === 'weather') {
			const milesPerHour = await Math.round(adjustedSpeed(this.state.milesPerHour, this.state.multiplier) * 10) / 10
			const milesPerDay = await Math.round(adjustedSpeed(this.state.milesPerDay, this.state.multiplier) * 10) / 10
			await this.setState({
				adjustedMilesPerHour: milesPerHour,
				adjustedMilesPerDay: milesPerDay
			})
		}

		console.table({
			Hour: 1,
			Miles: 3,
			Weather: this.state.weather,
			Terrain: this.state.terrain,
			'Combined Multiplier': this.state.multiplier,
			'Total Travel Time': 1 * this.state.multiplier,
			'Pace': this.state.pace,
			'Miles Per Hour': this.state.adjustedMilesPerHour,
			'Miles Per Day': this.state.adjustedMilesPerDay
		})
	}

  handleChange = (event) => {
		console.log(event)
    this.setState({
			//miles: event.target.value
		})
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

				<Row className='content w-100 mb-5'>
					<Row className='w-100 text-center'>
						<h2 className='w-100 text-center mb-3'>Time Calculator</h2>
					</Row>
					<CardGroup className='mb-3 w-100'>
						<TravelCard title='Hours of Travel Required' result={this.state.multiplier} />
						<TravelCard title='Days of Travel Required' result={this.state.multiplier} />
					</CardGroup>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text>Miles to Travel</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="miles to travel" defaultValue='3' />
					</InputGroup>
					{/* <input className='text-center' type='number' defaultValue='3' onChange={this.handleChange} /> */}
				</Row>

				<Row className='content mt-5'>
					<CardGroup className='mb-5 w-100'>
						<TravelCard title='Random Encounter' result='Harmless' />
						<TravelCard title='Getting Lost' result='On track' />
					</CardGroup>
					<Row className='content w-100'>
						<Threat onSelectValueChange={this.onValueChange} />
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