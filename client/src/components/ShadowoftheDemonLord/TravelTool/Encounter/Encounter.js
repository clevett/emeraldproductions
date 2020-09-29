import React from 'react'

import { Col } from 'react-bootstrap'
import SelectBuilder from '../../../SelectBuilder/SelectBuilder'
import data from  '../data/threat.js'

class Threat extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			data,
			options: data.map(object => object.name) || [],
			selected: 'Moderate',
			animation: false
    }
	}

	handleChange = async event => {
		await this.setState({ selected: event })
    this.props.onSelectValueChange('threat', this.state.selected)
  }
	
  handleClick = async event => {
		event.preventDefault()
		const roll = new Roll().roll(`1d20`).result
		const result = data.find(object => object.result.includes(roll))

		this.handleChange(result.name)

		this.setState({ animation: true })
	}

	render() {
		const animation = this.state.animation

		return (
			<Col>
				<h3>Threat Level</h3>
				<SelectBuilder options={this.state.options} selected={this.state.selected} onSelectValueChange={this.handleChange} />

				<Button className={animation ? 'rollDie' : ''} onClick={this.handleClick} onAnimationEnd={() => this.setState({ animation: false })} type="button" variant="link">
					<img alt='d6' src={d6}></img>
				</Button>
			</Col>
		)
	}
}

export default Threat