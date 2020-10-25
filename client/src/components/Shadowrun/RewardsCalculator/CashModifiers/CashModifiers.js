import React from 'react'

import StandardRun from './StandardRun'
import ModifierRun from './ModifierRun'

class CashModifiers extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nuyen: this.props.nuyen,
			runType: this.props.runType,
			modifier: 0,
			percent: 0
		}
		
		this.updateState = this.props.updateState.bind(this)
	}

	sliderChange = async percent => {
		await this.setState({
			percent: parseInt(percent),
			modifier: Math.ceil(this.state.nuyen * percent)
		})

		this.updateState('cashModifier', this.state.modifier)
  }

	render() {
		return(
			<div className="CashModifiers">
				{this.state.runType === 'standard' ? <StandardRun /> : <ModifierRun runType={this.state.runType} sliderChange={this.sliderChange} />}
			</div>
		)
	}
}

export default CashModifiers