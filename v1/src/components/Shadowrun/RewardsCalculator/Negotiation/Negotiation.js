import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

const Negotiation = ({ updateState }) => {
	const [base] = useState(3000)
	const [increase] = useState(100)
	const [rate,setRate] = useState(3000)

	const handleChange = event => {
		const negotiationTotal = base + (increase * event.target.value)
		setRate(negotiationTotal)
		updateState('nuyenBaseRate', negotiationTotal)
	}

	return(
		<Row className='justify-content-center'>
			<h2>Negotiation Net Hits</h2>
			<small>Base cost may be increased by 100 nuyen per net hit on a Negotiation Test at the start of the run. Current base is {rate}.</small>
			<label className='sr-only' htmlFor='negotiation-net-hits'>negotiation net hits</label>
			<input className='text-center mt-2' id='negotiation-net-hits' min='0' placeholder='0' type='number' onChange={handleChange}></input>
		</Row>
	)
}

export default Negotiation