import React from 'react'

import { Col } from 'react-bootstrap'
import data from  '../data/terrain.js'
import './Terrain.scss'
import Switch from '../../../Switch/Switch'
import findObjectByName from '../findObjectByName/findObjectByName'
import calculateMultiplier from './calculateMultiplier/calculateMultiplier'

class Terrain extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			data,
			multiplier: 0
    }
	}

	handleToggle = async (name, status) => {
		const object = await findObjectByName(data, name)
		const updatedMultiplier = calculateMultiplier(this.state.multiplier, object.multiplier, status)
		await this.setState({	multiplier: Math.max(updatedMultiplier, 0) })
		this.props.onSelectValueChange('terrain', this.state.multiplier)
	}

	renderedList = terrains => terrains.map(terrain => <Switch key={terrain.name} name={terrain.name} handleToggle={this.handleToggle} />)
	terrainSwitches = terrainTypes => <div className='switches'>{this.renderedList(terrainTypes)}</div>

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