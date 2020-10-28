import React from 'react'
import { Row, Col } from 'react-bootstrap'

class HighestDicepool extends React.Component {
	constructor(props) {
		super(props)
		this.state = { dicepool: 0 }

		this.updateState = this.props.updateState.bind(this)
	}

	handleChange = async event => {
		await this.setState({
			dicepool: event.target.value
		})

		this.updateState('dicepool', parseInt(this.state.dicepool))
	}

	render(){

		return(
			<Col className='HighestDicepool col-12 col-md-6'>
				<Row className='mb-3 justify-content-center'>
					<h2>Overall Mission Challenge</h2>
				</Row>
				<Row className='justify-content-center'>
					<Col>
						<h3>Highest Opposed Dicepool</h3>
						<small>This will be divided and rounded down</small>
					</Col>
					<Col>
						<label htmlFor='highest-opposed-dicepool' className='sr-only'>Enter the highest opposed dicepool</label>
						<input id='highest-opposed-dicepool' className='text-center' min="0" placeholder='14' type='number' onChange={this.handleChange} />
					</Col>
				</Row>
			</Col>
		)
	}
}

export default HighestDicepool