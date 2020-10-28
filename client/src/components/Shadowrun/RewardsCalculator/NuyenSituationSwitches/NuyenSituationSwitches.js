import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Switch from '../../../Switch/Switch'

import data from '../data/nuyen_modifiers'

class NuyenSituationSwitches extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			outnumbered3to1: false,
			outnumbered2to1: false,
			speed: false,
			notable: false,
			critters: false,
			spirits: false,
			exposure: false
		}

		this.updateState = this.props.updateState.bind(this)
	}

	updateParent = () => {
		let sum = 0
		Object.values(this.state).forEach(value => sum += value ? 1 : 0)
		this.updateState('cashSituationModifier', parseInt(sum))
	}

	handleToggle = async (name, status) => {
		let update = {[`${name}`] : status}

		if (name.includes('outnumbered') && status === true) {
			const oppositeKey = name === 'outnumbered3to1' ? 'outnumbered2to1' : 'outnumbered3to1'
			update[`${oppositeKey}`] = false
		}

		await this.setState(update)

		this.updateParent()
	}

	renderedList = options => options.map(option => <Switch key={option.name} description={option.description} name={option.name} handleToggle={this.handleToggle} />)

	render() {
		return(
			<Col className="NuyenSituationSwitches col-12 col-md-8">
				<Row className='justify-content-center mb-3'>
					<h2>Nuyen Situation Modifiers</h2>
				</Row>
				<Row className='CashSwitches switches text-left'>
					{this.renderedList(data)}
				</Row>
			</Col>
		)
	}
}

export default NuyenSituationSwitches