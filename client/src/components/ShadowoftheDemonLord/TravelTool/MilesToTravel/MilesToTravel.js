import React from 'react'

import { Col, Row } from 'react-bootstrap'

class MilesToTravel extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			milesToTravel: 3
    }
	}

	handleChange = async event => {
		await this.setState({
			milesToTravel: event.target.value
		})
		
		this.props.onChange('milesToTravel', this.state.milesToTravel)
  }
	
	render() {
		return (
			<Col>
				<Row className='justify-content-center'>
					<h3>Miles To Travel</h3>
				</Row>
				<Row className='justify-content-center'>
					<label for='miles-to-travel' className='sr-only'>Enter number of miles to travel</label>
					<input id='miles-to-travel' className='text-center' min="0" placeholder='30' type='number' onChange={this.handleChange} />
				</Row>
				<Row className='justify-content-center'>
					<span>(8 hours per day)</span>
				</Row>
			</Col>
		)
	}
}

export default MilesToTravel