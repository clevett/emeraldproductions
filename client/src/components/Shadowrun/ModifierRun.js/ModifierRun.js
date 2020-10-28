import React from 'react'
import { Row } from 'react-bootstrap'

class ModifierRun extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			runType: this.props.runType,
			percent: this.props.percent * 100 || 10,
			symbol: undefined,
			header: undefined,
			opacity: 0.2,
		 	pointer: 'none'
		}

		console.log(this.state.percent)

		this.sliderChange = this.props.sliderChange.bind(this)
	}

	componentDidMount() {
		let update = {}
		const goodRun = this.state.runType === 'good feels'
		update.symbol = goodRun ? '-' : '+'
		update.header = goodRun ? 'Subtract' : 'Add'

		const standardRun = this.state.runType === 'standard'
		update.opacity = !standardRun ? 1 : 0.2
		update.pointer = !standardRun ? 'unset' : 'none'

		this.setState(update)
  }

	handleChange = async event => this.sliderChange(parseFloat(`0.${event.target.value}`))

	render() {
		return(
			<div className='ModifierRun' style={{ pointerEvents: this.state.pointer, opacity: this.state.opacity }}>
				<Row className='justify-content-center'>
					<h3>{this.state.header} a Percentage</h3>
				</Row>
				<Row className='slider justify-content-center'>
					<label className='sr-only' htmlFor="percentageSlider">{this.state.header} modifier to cash rewards</label>
					<input type="range" className="custom-range" min="10" max="20" id="percentageSlider" defaultValue={this.state.percent} onChange={this.handleChange} />
					<span>{this.state.symbol}10%</span>
					<span></span>
					<span>{this.state.symbol}20%</span>
				</Row>
			</div>
		)
	}
}

export default ModifierRun