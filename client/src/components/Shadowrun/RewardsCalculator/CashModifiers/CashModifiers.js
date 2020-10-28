import React from 'react'
import { Row } from 'react-bootstrap'

import ModifierRun from '../../ModifierRun.js/ModifierRun'

class CashModifiers extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			runType: this.props.runType,
			percent: this.props.percent,
			message: null
		}
		
		this.updateState = this.props.updateState.bind(this)
	}

	componentDidMount = () => {
		if (this.state.runType !== 'standard') {
			this.setState({message: `Run type set to ${this.state.runType}`})
		} else {
			this.setState({message: 'Standard runs do not have a modifier.'})
		}
	}

	sliderChange = async percent => {
		await this.setState({	percent: parseFloat(percent) })
		this.updateState('cashModifierPercent', this.state.percent)
  }

	render() {
		return(
			<div className="CashModifiers">
				<Row className='justify-content-center mb-3'>{this.state.message}</Row>
				<ModifierRun runType={this.state.runType} sliderChange={this.sliderChange} percent={this.state.percent} />
			</div>
		)
	}
}

export default CashModifiers