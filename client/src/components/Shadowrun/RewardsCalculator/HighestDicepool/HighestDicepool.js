import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HighestDicepool = ({ updateState }) => {
	const handleChange = event => updateState('dicepool', parseInt(event.target.value))

	return (
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
					<input id='highest-opposed-dicepool' className='text-center' min="0" placeholder='14' type='number' onChange={handleChange} />
				</Col>
			</Row>
		</Col>
	)
}

export default HighestDicepool