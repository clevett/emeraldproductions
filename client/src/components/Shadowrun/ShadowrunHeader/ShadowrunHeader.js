
import React from 'react'
import DriveThruLink from '../../DriveThruLink/DriveThruLink'
import { Row } from 'react-bootstrap'

import dragon from '../dragon.png'

const ShadowrunHeader = ({ headerText }) => {
	return (
		<Row className='header text-center mb-5 justify-content-center w-100'>
			<img alt='shadowrun dragon logo' src={dragon}></img>
			<DriveThruLink id='115985' name='Shadowrun' />
			<h1 className='mb-0'>{headerText}</h1>
			<img alt='shadowrun dragon logo' src={dragon}></img>
		</Row>
	)
}

export default ShadowrunHeader