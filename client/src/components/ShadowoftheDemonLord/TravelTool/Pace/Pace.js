import React from 'react'

import { Row } from 'react-bootstrap'
import SelectBuilder from '../../../SelectBuilder/SelectBuilder'
import data from  '../data/pace.js'
import findObjectByName from '../findObjectByName/findObjectByName'

import './Pace.scss'

class Pace extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			data,
			options: data.map(object => object.name) || [],
			selected: 'walk',
			milesPerHour: 3,
			milesPerDay: 24
    }
	}

	handleChange = async event => {
		const object = await findObjectByName(data, event)

		await this.setState({
			selected: event,
			milesPerHour: object.hour,
			milesPerDay: object.day
		})
		
		this.props.onSelectValueChange('milesPerHour', this.state.milesPerHour)
		this.props.onSelectValueChange('milesPerDay', this.state.milesPerDay)
  }
	
	render() {
		return (
			<Row className='pace justify-content-center mb-2'>
				<h3 className='w-100'>Pace</h3>
				<SelectBuilder options={this.state.options} selected={this.state.selected} onSelectValueChange={this.handleChange} />
			</Row>
		)
	}
}

export default Pace