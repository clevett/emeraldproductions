import React from 'react'
import ReactGA from 'react-ga'
import { Container, Row, Col, CardGroup } from 'react-bootstrap'

import ShadowrunHeader from '../ShadowrunHeader/ShadowrunHeader'
import DisplayCard from '../DisplayCard/DisplayCard'
import RunTypeSlider from './RunTypeSlider/RunTypeSlider'
import HighestDicepool from './HighestDicepool/HighestDicepool'
import KarmaSwitches from './KarmaSwitches/KarmaSwitches'
import NuyenBonus from './NuyenBonus/NuyenBonus'
import NuyenSituationSwitches from './NuyenSituationSwitches/NuyenSituationSwitches'
import Negotiation from './Negotiation/Negotiation'

import calculateNuyen from './helpers/calculateNuyen/calculateNuyen'
import calculateKarma from './helpers/calculateKarma/calculateKarma'

import PercentContext from './contexts/PercentContext'

import './RewardsCalculator.scss'
class RewardsCalculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dicepool: 0,
			type: 'standard', //standard, cold-hearted, good feels
			karmaFromRun: 0,
			karmaModifier: 0,
			nuyenBaseRate: 3000,
			nuyenModifierPercent: 0.1,
			nuyenSituationModifier: 0,
			/*Displayed Results*/
			nuyen: 3000,
			karma: 0,
		}

		this.updateState = this.updateState.bind(this)
	}

  componentDidMount() {
    ReactGA.pageview(window.location.pathname)
  }

	updateState = async (key, value) => {
		await this.setState({[`${key}`]: value})
		let update = {}

		const karmaKeys = ['karmaFromRun', 'karmaModifier', 'dicepool']
		if (karmaKeys.includes(key)) {
			update.karma = calculateKarma(this.state.karmaFromRun, this.state.karmaModifier, this.state.dicepool)
		}

		const nuyenKeys = ['nuyenSituationModifier', 'nuyenModifierPercent', 'dicepool', 'type', 'nuyenBaseRate']
		if (nuyenKeys.includes(key)) {
			update.nuyen = calculateNuyen(this.state)
		}
		
		this.setState(update)
	}

	render() {
		return (
			<Container className="ShadowrunRewardsCalculator content text-white">
				<ShadowrunHeader headerText="Rewards Calculator" />
				<Row className='content'>
					<CardGroup className='w-100'>
						<DisplayCard title='Nuyen Rewards' result={{description: `${this.state.nuyen}¥`}} />
						<DisplayCard title='Karma Rewards' result={{description: this.state.karma}} />
					</CardGroup>
				</Row>
				<Row className='content col-12'>
					<RunTypeSlider updateState={this.updateState} />
					<HighestDicepool updateState={this.updateState} />
				</Row>
				<Row className='content'>
					<NuyenSituationSwitches updateState={this.updateState} />
					<Col className='col-12 col-md-4'>
						<PercentContext.Provider value={this.state.nuyenModifierPercent * 100}>
							<NuyenBonus key={this.state.type} runType={this.state.type} updateState={this.updateState} />
						</PercentContext.Provider>
						<Negotiation updateState={this.updateState} />
					</Col>
				</Row>
				<Row className='content'>
					<KarmaSwitches updateState={this.updateState} />
				</Row>
			</Container>
		)
	}
}

export default RewardsCalculator