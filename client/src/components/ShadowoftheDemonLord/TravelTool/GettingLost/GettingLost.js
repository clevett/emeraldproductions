import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Roll from 'roll'

import AnimatedDie from '../../../AnimatedDie/AnimatedDie'
import Switch from '../../../Switch/Switch'
import TravelCard from '../TravelCard/TravelCard'

import data from './conditions_data'
import './GettingLost.scss'

class GettingLost extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data,
			terrain: this.props.activeTerrain,
			d20Result: null,
			navigator: false,
			banes: 0,
			boons: 0,
			status: "Roll to see if you get lost...",
			d6Roll: ''
		}
	}

	componentDidMount() {
    console.log(this.state.terrain)
  }

	findCondition = name => this.state.data.find(object => object.condition === name)

	hangleNavigatorToggle = () => {
		const newStatus = !this.state.navigator ? true : false
		const navigationBoons = this.findCondition("Navigator").dice
		const boons = newStatus ? this.state.boons + navigationBoons : Math.max(this.state.boons - navigationBoons)

		this.setState({
			navigator: newStatus,
			boons
		})
	}

	dieRoll = async roll => {
		const dieTotal = this.state.boons - this.state.banes
		const d6sRoll = dieTotal !== 0 ? new Roll().roll(`${Math.abs(dieTotal)}d6`).rolled : false
		const highestD6 = d6sRoll ? Math.max(...d6sRoll) : 0

		console.log(this.state.terrain)

		const rollResult = (roll, highestD6) => 
			dieTotal > 0 ? roll + highestD6 : 
			dieTotal < 0 ? roll - highestD6	:
			roll

		const d6String = dieTotal !== 0 ? `Result: ${highestD6}` : ''

		this.setState({
			d20Result: roll,
			rollResult,
			d6Roll: d6String
		})

		console.log(`${roll} + ${highestD6} = ${rollResult(roll, highestD6)}`)
	}

	render() {
		return (
			<Col>
				<Row className='mb-3'>
					<TravelCard title='Getting Lost' result={this.state.status} />
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