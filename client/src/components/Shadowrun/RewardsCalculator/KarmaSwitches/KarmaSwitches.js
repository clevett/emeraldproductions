import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import Switch from '../../../Switch/Switch'
import findObject from '../helpers/findObject/findObject'
import totalSwitchKarma from '../helpers/totalSwitchKarma/totalSwitchKarma'

import data from '../data/karma_modifiers'

const KarmaSwitches = ({ updateState }) => {
	const [karma, setKarma] = useState(0)
	const [objectives, setObjectives] = useState(0)

	const handleToggle = (name, status) => {
		const object = findObject(name, data)
		const karmaTotal = totalSwitchKarma({
			karmaToAdd: object.karma,
			status,
			startingKarma: karma
		})
		setKarma(karmaTotal)
		updateState('karmaModifier', parseInt(karmaTotal))
	}

	const sliderChange = event => {
		const difference = event.target.value - objectives
		const karmaDifference = parseInt(karma + difference)
		setKarma(karmaDifference)
		setObjectives(parseInt(event.target.value))
		updateState('karmaModifier', karmaDifference)
  }

	return(
		<Col className="KarmaModifiers col-12">
			<Row className='justify-content-center'>
				<h2>Karma Situation Modifiers</h2>
			</Row>
			<Row>
				<Col className='switches justify-items-center'>
					<Switch key="survived" name="survived" description="Character survived" handleToggle={handleToggle} />
				</Col>
				<Col>
					<Row className='justify-content-center'>
						<h3>Group Completed Objectives</h3>
					</Row>
					<Row className='slider justify-content-center'>
						<label className='sr-only' htmlFor="completedObjectives">Choose objectives completed</label>
						<input type="range" className="custom-range" min="0" max="2" id="completedObjectives" defaultValue='0' onChange={sliderChange} />
						<span>None</span>
						<span>Some</span>
						<span>All</span>
					</Row>
				</Col>
			</Row>
		</Col>
	)
}

export default KarmaSwitches