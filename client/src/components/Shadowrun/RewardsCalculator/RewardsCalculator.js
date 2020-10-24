import React from 'react'
import { Container, Button, Row, CardGroup } from 'react-bootstrap'

import ShadowrunHeader from '../ShadowrunHeader/ShadowrunHeader'
import MissionCard from './MissionCard/MissionCard'

class RewardsCalculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			// <Container>
			// 	<ShadowrunHeader headerText="Rewards Calculator" />
			// 	<Row className='mb-5 content'>
			// 		<CardGroup className='mb-5 w-100'>
			// 			<MissionCard title='Nuyen Rewards' result={this.state.employer} />
			// 			<MissionCard title='Karma Rewards' result={this.state.employer} />
			// 		</CardGroup>
			// 	</Row>
			// </Container>
		)
	}
}

export default RewardsCalculator