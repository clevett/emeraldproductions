import React from 'react'

import { Col, Form } from 'react-bootstrap'
import data from  '../data/terrain.js'
import './Terrain.scss'

class Terrain extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			data,
			options: data.map(object => object.name) || [],
			desert: false,
			forest: false,
			hills: false,
			mountains: false,
			"plains/road": false,
			swamp: false,
			multiplier: 1
    }
	}

	handleChange = async event => {
		this.setState({
			multiplier: 1,
		})
		
		this.props.onSelectValueChange('terrain', this.state.multiplier)
	}
	
	handleChange = event => {
		console.log(event)
    //this.setState({value: event.target.value})
    //this.props.onSelectValueChange(event.target.value)
  }
	
	renderedList = terrains => terrains.map(terrain => <Form.Check key={terrain.name} type="switch" id={terrain.name} label={terrain.name} value={terrain.name} onChange={this.handleChange} />)

	terrainSwitches = terrainTypes => {
		return (
			<div className='switches'>
				{this.renderedList(terrainTypes)}
			</div>
		)
	}

	render() {
		return (
			<Col className='Terrain'>
				<h2>Terrain</h2>
				{this.terrainSwitches(data)}
			</Col>
		)
	}
}

export default Terrain