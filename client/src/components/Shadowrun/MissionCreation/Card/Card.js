import React from 'react'

const Card = ({title, result}) => {
	return (
		<div className='box card text-center'>
			<h2>{title}</h2>
			<p>{result}</p>
		</div>
	)
}

export default Card