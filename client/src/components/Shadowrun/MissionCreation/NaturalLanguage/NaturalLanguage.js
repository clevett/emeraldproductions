import React from 'react'

import './NaturalLanguage.scss'
import Location from './Location'
import Employer from './Employer'
import Job from './Job'
import MacGuffin from './MacGuffin'

const NaturalLanguage = ({ employer, location, job, macguffin, twist })  => {
	const lowerCase = string => string.toLowerCase()

	location 	= location.result && Location(location.result[0], lowerCase(`${location.description}`))
	employer 	= employer.result && Employer(employer.result[0], lowerCase(`${employer.description}`))
	job 			= job.result && Job(job.result[0], lowerCase(`${job.description}`))
	macguffin = macguffin.result && MacGuffin(macguffin.result[0], lowerCase(`${macguffin.description}`))
	twist 		= lowerCase(`${twist.description}`)

	return (
		<div className='NaturalLanguage text-center w-100'>
			<p>{employer} meets you {location}. They hire you to perform {job} job involving {macguffin}.</p>
			<p><i>The twist is {twist}.</i></p>
		</div>
	)
}

export default NaturalLanguage