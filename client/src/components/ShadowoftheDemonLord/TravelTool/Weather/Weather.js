import React from 'react'
import Roll from 'roll'

import { Row, Button } from 'react-bootstrap'
import data from  '../data/weather.js'
import findObjectByName from '../findObjectByName/findObjectByName'

//Images & Styling
import './Weather.scss'
import d6 from '../../../../imgs/icons/perspective-dice-six-faces-six.svg'
class Weather extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			options: data.map(object => object.name) || [],
			selected: 'Normal conditions',
			multiplier: 1,
    }
	}

	handleChange = async event => {
		const object = await findObjectByName(data, event)

		this.setState({
			selected: event,
			multiplier: object.multiplier
		})
		
    this.props.onSelectValueChange('weather', this.state.multiplier)
  }
	
  handleClick = async event => {
		event.preventDefault()
		const roll = new Roll().roll(`3d6`).result
		const result = data.find(object => object.result.includes(roll))

		await this.handleChange(result.name)

		console.log(`Selected: ${this.state.selected}, Multiplier: ${this.state.multiplier}`)
	}

	renderedList = options => options.map(option => <option key={option} option={option} >{option}</option>)

	render() {
		return (
			<Row className='weather justify-content-center'>
				<h3 className='w-100'>Weather</h3>

				<select value={this.state.selected} onChange={this.handleChange}>
					{this.renderedList(this.state.options)}
        </select>

				<Button onClick={this.handleClick} type="button" variant="link">
					<img alt='d6' src={d6}></img>
				</Button>
			</Row>
		)
	}
}

export default Weather