import React from 'react'

import { Card } from 'react-bootstrap'

const MissionCard = ({title, result}) => {
	return (
		<Card className='text-center'>
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

export default MissionCard