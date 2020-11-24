import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'

import PercentContext from '../contexts/PercentContext'

const PercentSlider = ({ sliderChange, runType }) => {
	const percent = useContext(PercentContext)

	const symbol = runType === 'good feels' ? '-' : '+'
	const header = runType === 'good feels' ? 'Subtract' : 'Add'

	const opacity = runType === 'standard' ? 0.2 : 1
	const pointer = runType === 'standard' ? 'none' : 'unset'

	const handleChange = event => sliderChange(parseFloat(`0.${event.target.value}`))

	return(
		<div className='ModifierRun' style={{ pointerEvents: pointer, opacity: opacity }}>
			<Row className='justify-content-center'>
				<h3>{header} a Percentage</h3>
			</Row>
			<Row className='slider justify-content-center'>
				<label className='sr-only' htmlFor="percentageSlider">{header} modifier to cash rewards</label>
				<input type="range" className="custom-range" min="10" max="20" id="percentageSlider" defaultValue={percent} onChange={handleChange} />
				<span>{symbol}10%</span>
				<span></span>
				<span>{symbol}20%</span>
			</Row>
		</div>
	)
}

export default PercentSlider