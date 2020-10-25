import React from 'react'
import { Row } from 'react-bootstrap'

import Switch from '../../../Switch/Switch'

import data from './karma_modifiers'
import './KarmaSwitches.scss'

class KarmaSwitches extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data,
			survived: true,
			allObjectives: false,
			someObjectives: false,
			karma: 0
		}

		this.updateState = this.props.updateState.bind(this)
	}

	totalKarma = (name, status) => {
		const dataObject = data.find(object => object.name === name)
		let karma = this.state.karma
		status ? karma += dataObject.karma : karma -= dataObject.karma 
		return karma
	}

	handleToggle = async (name, status) => {
		const karma = this.totalKarma(name, status)

		await this.setState({
			karma,
			[`${name}`]: status,
		})

		this.updateState('karmaModifiersTotal', parseInt(this.state.karma))
	}

	renderedList = data => data.map(toggle => <Switch key={toggle.name} name={toggle.name} description={toggle.description} handleToggle={this.handleToggle} />)
	modifierSwitches = data => <div className='switches'>{this.renderedList(data)}</div>

	render() {
		return(
			<Row className='KarmaSwitches'>{this.modifierSwitches(this.state.data)}</Row>
		)
	}
}

export default KarmaSwitches