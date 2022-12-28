
import React from 'react'

//Components
import { Row } from 'react-bootstrap'
import pentagram from '../pentagram-hi.png'

import DriveThruLink from '../../DriveThruLink/DriveThruLink'

//Images & Styling
import './RPGHeader.scss'

const sodlHeader = ({ title }) => {
	return(
		<Row className='header-row text-center mb-3 justify-content-center w-100'>
			<img alt='bloody pentagram' src={pentagram}></img>
			<DriveThruLink id='155572' name='Shadow of the Demon Lord' />
			<h1 className='mb-0'>{title}</h1>
			<img alt='bloody pentagram' src={pentagram}></img>
		</Row>
	)
}

export default sodlHeader