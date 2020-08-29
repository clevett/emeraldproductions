import React from 'react'

import { Col } from 'react-bootstrap'
import SelectBuilder from '../../../SelectBuilder/SelectBuilder'
import data from  '../data/pace.js'
import findObject from '../findObject/findObject'

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
		const object = await findObject(data, event)

		this.setState({
			selected: event,
			milesPerHour: object.hour,
			milesPerDay: object.day
		})
		
		this.props.onSelectValueChange('milesPerHour', this.state.milesPerHour)
		this.props.onSelectValueChange('milesPerDay', this.state.milesPerDay)
  }
	
	render() {
		return (
			<Col className='pace'>
				<h2>Pace</h2>
				<SelectBuilder options={this.state.options} selected={this.state.selected} onSelectValueChange={this.handleChange} />
			</Col>
		)
	}
}

export default Pace