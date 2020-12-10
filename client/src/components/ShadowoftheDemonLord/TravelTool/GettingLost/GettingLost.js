import React from 'react'
import { Row, Col } from 'react-bootstrap'

import AnimatedDie from '../../../AnimatedDie/AnimatedDie'
import Switch from '../../../Switch/Switch'
import DisplayCard from '../../DisplayCard/DisplayCard'
import determineBoonBaneModifier from './determineBoonBaneModifier/determineBoonBaneModifier'
import calculateRollResult from './calculateRollResult/calculateRollResult'

import data from './conditions_data'
import './GettingLost.scss'

class GettingLost extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data,
			conditions: this.props.conditions,
			navigator: false,
			banes: 0,
			boons: 0,
			status: "Roll to see if you get lost...",
			d6Roll: ''
		}
	}

	componentDidMount() {
		let banes = 0
		let boons = 0

		this.state.conditions.forEach(condition => {
			const conditionObject = this.findCondition(condition)
			if (!conditionObject) {
				return
			} else if (conditionObject.effect === 'boon') {
				boons += conditionObject.dice
			} else if (conditionObject.effect === 'bane') {
				banes += conditionObject.dice
			}
		})

		this.setState({	banes, boons })
  }

	findCondition = name => this.state.data.find(object => object.condition.toLowerCase() === name.toLowerCase())

	hangleNavigatorToggle = () => {
		const newStatus = !this.state.navigator ? true : false
		const navigationBoons = this.findCondition("Navigator").dice
		const boons = newStatus ? this.state.boons + navigationBoons : Math.max(this.state.boons - navigationBoons)

		this.setState({
			navigator: newStatus,
			boons
		})
	}

	buildResultString = d6 => {
		const d6Type = this.state.boons > this.state.banes ? 'Boon' : 'Bane'
		return `${d6Type} result: ${d6}`
	}

	dieRoll = async d20Roll => {
		const diceTotal = this.state.boons - this.state.banes
		const highestD6 = determineBoonBaneModifier(diceTotal)
		const rollResult = calculateRollResult(diceTotal, d20Roll, highestD6)

		const d6String = diceTotal !== 0 ? this.buildResultString(highestD6) : ''
		const updateStatus = rollResult < 10 ? 'You are lost' : "You move in the direction you intended"

		await this.setState({
			d6Roll: d6String,
			status: updateStatus
		})
	}

	render() {
		return (
			<Col>
				<Row className='mb-3'>
					<DisplayCard title='Getting Lost' result={this.state.status} />
				</Row>
				<Row>
					<Col className='GettingLost'>
						<Row className='justify-content-center'>
							<Col className='text-capitalize switch justify-content-center'>
								<Switch key="navigator-toggle" name="navigator" handleToggle={this.hangleNavigatorToggle} />
							</Col>
							<Col className='text-capitalize'>
								<Row className='justify-content-center'>Boons: {this.state.boons}</Row>
								<Row className='justify-content-center'>Banes: {this.state.banes}</Row>
								<Row className='justify-content-center font-weight-bold'>{this.state.d6Roll}</Row>
							</Col>
							<Col>
								<AnimatedDie dieSize='d20' dieRoll={this.dieRoll} />
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		)
	}
}

export default GettingLost