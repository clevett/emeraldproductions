import React from 'react'
import Roll from 'roll'

import { Row, Col, Button } from 'react-bootstrap'

import TravelCard from '../TravelCard/TravelCard'
import Threat from './Threat/Threat'

import d20 from '../../../../imgs/icons/dice-twenty-faces-twenty.svg'
import data from  './encounter_data.js'

class RandomEncounters extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			encounter: "Roll for encounters",
			threat: "Moderate",
			animation: false
		}
	}

	onValueChange = async (key, value) => this.setState({[`${key}`]: value})

	animationStart = roll => {
		this.setState({ 
			animation: true,
			roll,
			rollResult: ''
		})
	}

  handleClick = async event => {
		event.preventDefault()
		const roll = new Roll().roll(`1d20`).result
		const lowercaseThreat = this.state.threat.toLowerCase()
		const result = data.find(object => object[lowercaseThreat] && object[lowercaseThreat].includes(roll))
		
		this.animationStart(roll)

		this.setState({ encounter: result.encounter	})
	}

	animationEnd = () => {
		this.setState({ 
			animation: false,
			rollResult: this.state.roll
		})
	}

	render() {
		const animation = this.state.animation
		
		return (
			<Col className='mr-3 RandomEncounters'>
				<Row className='mb-3'>
					<TravelCard title='Random Encounter' result={this.state.encounter} />
				</Row>
				<Row className='justify-content-center'>
					<Threat onValueChange={this.onValueChange} />
					<Button className={animation ? 'rollDie' : ''} onClick={this.handleClick} onAnimationEnd={this.animationEnd} type="button" variant="link">
						<img alt='d20' src={d20}></img>
						<span className='text-white'>{this.state.rollResult}</span>
					</Button>
				</Row>
			</Col>
		)
	}
}

export default RandomEncounters