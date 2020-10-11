import React from 'react'

import SelectBuilder from '../../../../SelectBuilder/SelectBuilder'
import data from  './threat_data.js'

class Threat extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			data,
			options: data.map(object => object.name) || [],
			selected: 'Moderate',
			id: 'sodl-threat-select',
			label: 'Select a threat level'
    }
	}

	handleChange = async event => {
		await this.setState({ selected: event })
    this.props.onValueChange('threat', this.state.selected)
  }
	
	render() {
		return (
			<div>
				<h3>Threat Level</h3>
				<SelectBuilder 
					id={this.state.id}
					label={this.state.label}
					options={this.state.options} 
					selected={this.state.selected} 
					onSelectValueChange={this.handleChange} 
				/>
			</div>
		)
	}
}

export default Threat