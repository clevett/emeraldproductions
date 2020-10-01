import React from 'react'

import { Card } from 'react-bootstrap'

const TravelCard = ({title, result}) => {
	return (
		<Card className='text-center w-100'>
			<Card.Body>
				<Card.Title className='font-weight-bold'>{title}</Card.Title>
				<Card.Text>{result}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default TravelCard