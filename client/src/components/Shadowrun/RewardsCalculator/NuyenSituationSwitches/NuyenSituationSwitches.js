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

	handleToggle = async (name, status) => {
		console.log(name, status)
		//this.updateState('karmaModifier', parseInt(this.state.karma))
	}

	renderedList = options => options.map(option => <Switch key={option.name} description={option.description} name={option.name} handleToggle={this.handleToggle} />)

	render() {
		return(
			<Col className="NuyenSituationSwitches col-12 col-md-7">
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