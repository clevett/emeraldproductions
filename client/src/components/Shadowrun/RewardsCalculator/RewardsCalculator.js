import React from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'

import ShadowrunHeader from '../ShadowrunHeader/ShadowrunHeader'
import DisplayCard from '../DisplayCard/DisplayCard'

import './RewardsCalculator.scss'

class RewardsCalculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nuyen: 3000,
			karma: 2,
			runType: 'standard' //standard, cold-hearted, good feels
		}
	}

	handleChange = async event => {
		console.log(event.target.value)
		// await this.setState({
		// 	milesToTravel: event.target.value
		// })
		
		// this.props.onChange('milesToTravel', this.state.milesToTravel)
  }

	sliderChange = async event => {
		const convertRunType = value => {
			switch(event.target.value) {
				case 0:
					return "good feels"
				case 2:
					return 'cold-hearted'
				default:
					return 'standard'
			}
		}

		const newRunType = convertRunType(event.target.value)

		if (this.state.runType !== newRunType) {
			await this.setState({
				runType: newRunType
			})
		}
  }

	render() {
		return (
			<Container className="ShadowrunRewardsCalculator content text-white">
				<ShadowrunHeader headerText="Rewards Calculator" />
				<Row className='mb-3 content'>
					<CardGroup className='mb-5 w-100'>
						<DisplayCard title='Nuyen Rewards' result={{description: `${this.state.nuyen}¥`}} />
						<DisplayCard title='Karma Rewards' result={{description: this.state.karma}} />
					</CardGroup>
				</Row>
				<Row className='mb-3 content'>
					<Col>
						<Row className='mb-3 justify-content-center'>
							<h2>Run Type</h2>
						</Row>
						<Row className='slider justify-content-center'>
							<label className='sr-only' htmlFor="customRange2">Choose run type</label>
							<input type="range" className="custom-range" min="0" max="2" id="customRange2" defaultValue='1' onChange={this.sliderChange} />
							<span>Good feels</span>
							<span>Standard</span>
							<span>Cold-hearted</span>
						</Row>
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