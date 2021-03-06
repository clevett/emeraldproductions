import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import PercentSlider from '../PercentSlider/PercentSlider'

const NuyenBonus = ({ updateState, runType }) => {
	const [type] = useState(runType)
	const string = 
		type && type !== 'standard' ? `Run type set to ${type}.` : 
		type && type === 'standard' ? 'Standard runs do not have a bonus.' :
		'Run type is not set correcty'
	const [message] = useState(string)

	const sliderChange = percent => updateState('nuyenModifierPercent', percent)

	return (
		<Col className="NuyenBonus mb-3 col-12">
			<Row className='justify-content-center'>
				<h2>Nuyen Bonus</h2>
			</Row>
			<Row className='justify-content-center mb-3'>{message}</Row>
			<PercentSlider runType={type} sliderChange={sliderChange} />
		</Col>
	)
}

export default NuyenBonus