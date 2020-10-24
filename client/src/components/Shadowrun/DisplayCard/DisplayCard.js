import React from 'react'

import { Card } from 'react-bootstrap'
import './DisplayCard.scss'

const DisplayCard = ({title, result}) => {
	return (
		<Card className='DisplayCard text-center'>
			<Card.Body>
				<Card.Title className='font-weight-bold'>{title}</Card.Title>
				<Card.Text>
					{result.description} 
					<br />
					<small>{result.note}</small>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default DisplayCard