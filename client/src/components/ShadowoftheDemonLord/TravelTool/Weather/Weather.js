import React from 'react'

import { Row } from 'react-bootstrap'
import data from  './weather_data.js'
import findObjectByName from '../helpers/findObjectByName/findObjectByName'
import AnimatedDie from '../../../AnimatedDie/AnimatedDie'
import SelectBuilder from '../../../SelectBuilder/SelectBuilder'

//Images & Styling
import './Weather.scss'
class Weather extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			options: data.map(object => object.name) || [],
			selected: 'Normal conditions',
			multiplier: 1,
			id: 'sodl-weather-select',
			label: 'Select weather conditions'
    }
	}

	handleChange = async event => {
		const selected = event.target ? event.target.value : event
		const object = await findObjectByName(data, selected)

		await this.setState({
			selected,
			multiplier: object.multiplier
		})

		this.props.onSelectValueChange('weather', this.state.multiplier)
		this.props.onSelectValueChange('activeWeather', this.state.selected)
  }

  dieRoll = async roll => {
		await this.setState({roll})
		const result = data.find(object => object.result.includes(this.state.roll))
		this.handleChange(result.name)
	}

	render() {

		return (
			<Row className='weather justify-content-center align-items-center'>
				<h3 className='w-100'>Weather</h3>

				<SelectBuilder
					id={this.state.id}
					label={this.state.label}
					options={this.state.options} 
					selected={this.state.selected} 
					onSelectValueChange={this.handleChange} 
				/>

				<AnimatedDie dieSize='d6' dieQuanity={3} dieRoll={this.dieRoll} />
			</Row>
		)
	}
}

export default Weather