import React from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'

import ShadowrunHeader from '../ShadowrunHeader/ShadowrunHeader'
import DisplayCard from '../DisplayCard/DisplayCard'
import RunTypeSlider from './RunTypeSlider/RunTypeSlider'
import HighestDicepool from './HighestDicepool/HighestDicepool'
import KarmaSwitches from './KarmaSwitches/KarmaSwitches'
import CashModifiers from './CashModifiers/CashModifiers'
import { calculateNuyen } from './helpers/calculateNuyen/calculateNuyen'
class RewardsCalculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nuyen: 3000,
			karma: 0,
			karmaFromRun: 0,
			karmaModifier: 0,
			type: 'standard', //standard, cold-hearted, good feels
			dicepool: 0,
			cashModifierPercent: 0.1,
			cashSituationModifier: 0
		}

		this.updateState = this.updateState.bind(this)
	}

	updateState = async (key, value) => {
		await this.setState({[`${key}`]: value})
		let update = {}
		console.log(this.state)

		if (key === 'karmaFromRun' || key === 'karmaModifier' || key === 'dicepool') {
			update.karma = this.state.karmaFromRun + this.state.karmaModifier + Math.floor(this.state.dicepool/6)
		}

		if (key === 'cashSituationModifier' || key === 'cashModifierPercent' || key === 'dicepool' || key === 'type') {
			update.nuyen = calculateNuyen(this.state)
		}

		this.setState(update)
	}

	render() {
		return (
			<Container className="ShadowrunRewardsCalculator content text-white">
				<ShadowrunHeader headerText="Rewards Calculator" />
				<Row className='mb-3 content'>
					<CardGroup className='mb-3 w-100'>
						<DisplayCard title='Nuyen Rewards' result={{description: `${this.state.nuyen}¥`}} />
						<DisplayCard title='Karma Rewards' result={{description: this.state.karma}} />
					</CardGroup>
				</Row>
				<Row className='mb-5 content'>
					<Col>
						<Row className='justify-content-center'>
							<h2>Run Type</h2>
						</Row>
						<RunTypeSlider updateState={this.updateState} />
					</Col>
					<Col>
						<Row className='mb-3 justify-content-center'>
							<h2>Overall Mission Challenge</h2>
						</Row>
						<HighestDicepool updateState={this.updateState} />
					</Col>
				</Row>
				<Row className='content'>
					<Col>
						<Row className='justify-content-center'>
							<h2>Cash Situation Modifiers</h2>
						</Row>
					</Col>
					<Col>
						<Row className='justify-content-center'>
							<h2>Cash Modifiers</h2>
						</Row>
						<CashModifiers key={this.state.type} runType={this.state.type} updateState={this.updateState} percent={this.state.cashModifierPercent} />
					</Col>
					<Col>
						<Row className='justify-content-center'>
							<h2>Karma Situation Modifiers</h2>
						</Row>
						<KarmaSwitches updateState={this.updateState} />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default RewardsCalculator