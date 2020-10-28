import React from 'react'
import { Row, Col } from 'react-bootstrap'

import PercentSlider from './PercentSlider/PercentSlider'

class CashBonus extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			runType: this.props.runType,
			message: null
		}
		
		this.updateState = this.props.updateState.bind(this)
	}

	componentDidMount = () => {
		const message = this.state.runType !== 'standard' ? `Run type set to ${this.state.runType}.` : 'Standard runs do not have a bonus.'
		this.setState({message})
	}

	sliderChange = async percent => this.updateState('cashModifierPercent', percent)

	render() {
		return(
			<Col className="CashBonus">
				<Row className='justify-content-center'>
					<h2>Cash Bonus</h2>
				</Row>
				<Row className='justify-content-center mb-3'>{this.state.message}</Row>
				<PercentSlider runType={this.state.runType} sliderChange={this.sliderChange} />
			</Col>
		)
	}
}

export default CashBonus