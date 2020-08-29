import React from 'react'

import { Col } from 'react-bootstrap'
import SelectBuilder from '../../../SelectBuilder/SelectBuilder'
import data from  '../data/weather.js'
import findObjectByName from '../findObjectByName/findObjectByName'

class Weather extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			data,
			options: data.map(object => object.name) || [],
			selected: 'Normal conditions',
			multipier: 1,
    }
	}

	handleChange = async event => {
		const object = await findObjectByName(data, event)

		this.setState({
			selected: event,
			multipier: object.multiplier
		})
		
    this.props.onSelectValueChange('weatherMultiplier', this.state.multipier)
  }
	
	render() {
		return (
			<Col>
				<h2>Weather</h2>
				<SelectBuilder options={this.state.options} selected={this.state.selected} onSelectValueChange={this.handleChange} />
			</Col>
		)
	}
}

export default Weather