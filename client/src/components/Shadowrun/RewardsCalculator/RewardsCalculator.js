import React from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'

import ShadowrunHeader from '../ShadowrunHeader/ShadowrunHeader'
import DisplayCard from '../DisplayCard/DisplayCard'
import RunTypeSlider from './RunTypeSlider/RunTypeSlider'

import './RewardsCalculator.scss'

class RewardsCalculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nuyen: 3000,
			karma: 2,
			type: 'standard' //standard, cold-hearted, good feels
		}
	}

	updateState = async (key, value) => {
		await this.setState({
			[`${key}`]: value
		})
	}


	handleChange = async event => {
		console.log(event.target.value)
		// await this.setState({
		// 	milesToTravel: event.target.value
		// })
		
		// this.props.onChange('milesToTravel', this.state.milesToTravel)
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
				<Row className='mb-3 content'>
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
						<Row className='justify-content-center'>
							<Col>
								<h3>Highest Opposed Dicepool</h3>
								<small>This will be divided and rounded down</small>
							</Col>
							<Col>
								<label htmlFor='highest-opposed-dicepool' className='sr-only'>Enter the highest opposed dicepool</label>
								<input id='highest-opposed-dicepool' className='text-center' min="0" placeholder='14' type='number' onChange={this.handleChange} />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default RewardsCalculator