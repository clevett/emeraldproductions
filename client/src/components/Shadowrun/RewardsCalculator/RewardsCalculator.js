import React from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'

import ShadowrunHeader from '../ShadowrunHeader/ShadowrunHeader'
import DisplayCard from '../DisplayCard/DisplayCard'
import RunTypeSlider from './RunTypeSlider/RunTypeSlider'
import HighestDicepool from './HighestDicepool/HighestDicepool'
import KarmaSwitches from './KarmaSwitches/KarmaSwitches'
import CashBonus from './CashBonus/CashBonus'

import calculateNuyen from './helpers/calculateNuyen/calculateNuyen'
import calculateKarma from './helpers/calculateKarma/calculateKarma'

import PercentContext from './contexts/PercentContext'
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
			update.karma = calculateKarma(this.state.karmaFromRun, this.state.karmaModifier, this.state.dicepool)
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
					<RunTypeSlider updateState={this.updateState} />
					<HighestDicepool updateState={this.updateState} />
				</Row>
				<Row className='content'>
					<Col>
						<Row className='justify-content-center'>
							<h2>Cash Situation Modifiers</h2>
						</Row>
					</Col>
					<PercentContext.Provider value={this.state.cashModifierPercent * 100}>
						<CashBonus key={this.state.type} runType={this.state.type} updateState={this.updateState} />
					</PercentContext.Provider>
					<KarmaSwitches updateState={this.updateState} />
				</Row>
			</Container>
		)
	}
}

export default RewardsCalculator