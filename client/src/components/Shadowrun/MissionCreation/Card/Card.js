import React from 'react'

import { Card } from 'react-bootstrap'

const missionCard = ({title, result}) => {
	return (
		<Card className='box text-center' style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{result.description} 
					<br />
					<small>{result.note}</small>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default missionCard