import React from 'react'
import { Row, Col } from 'react-bootstrap'

import AnimatedDie from '../../../AnimatedDie/AnimatedDie'

class GettingLost extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			roll: null,
			navigator: false
		}
	}

	onValueChange = async (key, value) => await this.setState({[`${key}`]: value})

	dieRoll = async roll => {
		await this.setState({roll: roll})
		console.log(this.state.roll)
	}

	render() {
		return (
			<Col className='mr-3 GettingLost'>
				<Row className='justify-content-center'>
					<div>Navigator Switch</div>
					<AnimatedDie dieSize='d20' dieRoll={this.dieRoll} />
				</Row>
			</Col>
		)
	}
}

export default GettingLost