import React from 'react'

import { Row, Col } from 'react-bootstrap'

import DisplayCard from '../../DisplayCard/DisplayCard'
import Threat from './Threat/Threat'
import AnimatedDie from '../../../AnimatedDie/AnimatedDie'

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

	onValueChange = async (key, value) => await this.setState({[`${key}`]: value})

  dieRoll = async roll => {
		const lowercaseThreat = this.state.threat.toLowerCase()
		const result = data.find(object => object[lowercaseThreat] && object[lowercaseThreat].includes(roll))
		this.setState({ 
			roll,
			encounter: result.encounter	
		})
	}

	render() {
		return (
			<Col className='mr-3 RandomEncounters'>
				<Row className='mb-3'>
					<DisplayCard title='Random Encounter' result={this.state.encounter} />
				</Row>
				<Row className='justify-content-center'>
					<Threat onValueChange={this.onValueChange} />
					<AnimatedDie dieSize='d20' dieRoll={this.dieRoll} />
				</Row>
			</Col>
		)
	}
}

export default RandomEncounters