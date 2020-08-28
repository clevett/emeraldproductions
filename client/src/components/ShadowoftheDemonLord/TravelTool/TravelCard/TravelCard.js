import React from 'react'

import { Card } from 'react-bootstrap'

const TravelCard = ({title, result}) => {
	return (
		<Card className='text-center' style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{result}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default TravelCard