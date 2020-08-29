import React from 'react'

import { Col, Form } from 'react-bootstrap'
import data from  '../data/terrain.js'
import findObjectByName from '../findObjectByName/findObjectByName'

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
			plains: false,
			road: false,
			swamp: false,
			multiplier: 1
    }
	}

	handleChange = async event => {
		const object = await findObjectByName(data, event)

		this.setState({
			multiplier: 1,
		})
		
		this.props.onSelectValueChange('terrain', this.state.multiplier)
  }
	
	render() {
		return (
			<Col className='Terrain'>
				<h2>Terrain</h2>
				<Form.Check 
					type="switch"
					id="custom-switch"
					label="Desert"
				/>
			</Col>
		)
	}
}

export default Terrain