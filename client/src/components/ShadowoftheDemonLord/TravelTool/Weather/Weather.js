import React from 'react'

import { Row } from 'react-bootstrap'
import data from  './weather_data.js'
import findObjectByName from '../helpers/findObjectByName/findObjectByName'
import AnimatedDie from '../../../AnimatedDie/AnimatedDie'

//Images & Styling
import './Weather.scss'
class Weather extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			options: data.map(object => object.name) || [],
			selected: 'Normal conditions',
			multiplier: 1
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

	renderedList = options => options.map(option => <option key={option} option={option} >{option}</option>)

	render() {

		return (
			<Row className='weather justify-content-center align-items-center'>
				<h3 className='w-100'>Weather</h3>

				<select value={this.state.selected} onChange={this.handleChange}>
					{this.renderedList(this.state.options)}
        </select>

				<AnimatedDie dieSize='d6' dieQuanity={3} dieRoll={this.dieRoll} />
			</Row>
		)
	}
}

export default Weather