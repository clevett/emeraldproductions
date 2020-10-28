import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Switch from '../../../Switch/Switch'
import findObject from '../helpers/findObject/findObject'
import totalSwitchKarma from '../helpers/totalSwitchKarma/totalSwitchKarma'

import data from '../data/karma_modifiers'

class KarmaSwitches extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			survived: true,
			objectives: 0,
			karma: 0
		}

		this.updateState = this.props.updateState.bind(this)
	}

	handleToggle = async (name, status) => {
		const object = findObject(name, data)
		const karma = totalSwitchKarma({karma: object.karma, status, startingKarma: this.state.karma})
		await this.setState({
			karma,
			[`${name}`]: status,
		})

		this.updateState('karmaModifier', parseInt(this.state.karma))
	}

	sliderChange = async event => {
		const difference = event.target.value - this.state.objectives
		const karma = this.state.karma + difference

		await this.setState({
			karma,
			objectives: parseInt(event.target.value)
		})

		this.updateState('karmaModifier', parseInt(this.state.karma))
  }

	render() {
		return(
			<Col className="KarmaModifiers">
				<Row className='justify-content-center'>
					<h2>Karma Situation Modifiers</h2>
				</Row>
				<Row className='KarmaSwitches switches mb-3'>
					<Switch key="survived" name="survived" description="Character survived" handleToggle={this.handleToggle} />
					</Row>
					<Row className='justify-content-center'>
						<h3>Group Completed Objectives</h3>
					</Row>
					<Row className='slider justify-content-center'>
						<label className='sr-only' htmlFor="completedObjectives">Choose objectives completed</label>
						<input type="range" className="custom-range" min="0" max="2" id="completedObjectives" defaultValue='0' onChange={this.sliderChange} />
						<span>None</span>
						<span>Some</span>
						<span>All</span>
					</Row>
			</Col>
		)
	}
}

export default KarmaSwitches