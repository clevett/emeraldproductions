import React from 'react'

const DriveThruLink = ({name, id}) => {
	const url = `https://www.drivethrurpg.com/product/${id}/?affiliate_id=879798`

	return (
		<a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
	)
}

export default DriveThruLink