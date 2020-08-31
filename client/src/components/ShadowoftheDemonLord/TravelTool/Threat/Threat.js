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
			selected: 'Moderate'
    }
	}

	handleChange = async event => {
		await this.setState({ selected: event })
    this.props.onSelectValueChange('threat', this.state.selected)
  }
	
	render() {
		return (
			<Col>
				<h2>Threat</h2>
				<SelectBuilder options={this.state.options} selected={this.state.selected} onSelectValueChange={this.handleChange} />
			</Col>
		)
	}
}

export default Threat