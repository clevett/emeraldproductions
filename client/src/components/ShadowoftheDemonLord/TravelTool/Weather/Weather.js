import React from 'react'

import { Col } from 'react-bootstrap'
import SelectBuilder from '../../../SelectBuilder/SelectBuilder'
import weather from  '../data/weather.js'
import findObject from '../findObject/findObject'

class Weather extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			weather,

			options: weather.map(object => object.name) || [],
			selected: 'Normal conditions',
			multipier: 1,
    }
	}

	handleChange = async event => {
		const object = await findObject(weather, event)

		this.setState({
			selected: event,
			multipier: object.multiplier
		})
		
    this.props.onSelectValueChange('weatherModifier', this.state.multipier)
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