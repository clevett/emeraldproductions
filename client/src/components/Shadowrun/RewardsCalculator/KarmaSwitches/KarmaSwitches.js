import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import Switch from '../../../Switch/Switch'

const KarmaSwitches = ({ updateState, nuyenSituationModifier }) => {
	const [surviveBonus, setSurviveBonus] = useState(0)
	const [objectiveBonus, setObjectiveBonus] = useState(0)
	const [situationBonus, setSituationBonus] = useState(0)

	const updateKarmaTotal = () => {
		updateState('karmaModifier', parseInt(surviveBonus + objectiveBonus + situationBonus))
	}

	useEffect(() => updateKarmaTotal(), [surviveBonus, objectiveBonus, situationBonus])

	const germanToggle = (name, status) => status ? setSituationBonus(nuyenSituationModifier) : setSituationBonus(0)
	const surviveToggle = (name, status) => status ? setSurviveBonus(2) : setSurviveBonus(0)
	const sliderChange = event => setObjectiveBonus(parseInt(event.target.value))

	return(
		<Col className="KarmaModifiers col-12">
			<Row className='justify-content-center'>
				<h2>Karma Situation Modifiers</h2>
			</Row>
			<Row>
				<Col className='switches justify-items-center'>
					<Switch 
						key="german" 
						name="german" 
						description="Use German ruleset" 
						handleToggle={germanToggle} 
					/>
					<small>A karma is added for each of the Nuyen Situation Modifiers</small>
				</Col>
				<Col className='switches justify-items-center'>
					<Switch 
						key="survived" 
						name="survived" 
						description="Character survived" 
						handleToggle={surviveToggle} 
					/>
				</Col>
				<Col>
					<Row className='justify-content-center'>
						<h3>Group Completed Objectives</h3>
					</Row>
					<Row className='slider justify-content-center'>
						<label className='sr-only' htmlFor="completedObjectives">Choose objectives completed</label>
						<input 
							type="range" 
							className="custom-range" 
							min="0" 
							max="2" 
							id="completedObjectives" 
							defaultValue='0' 
							onChange={sliderChange} 
						/>
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