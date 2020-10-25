import React from 'react'
import { Row } from 'react-bootstrap'


class ModifierRun extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nuyen: this.props.nuyen,
			runType: this.props.runType,
			modifier: 0,
			symbol: undefined,
			header: undefined
		}

		this.sliderChange = this.props.sliderChange.bind(this)
	}

	componentDidMount() {
		const goodRun = this.state.runType === 'good feels'
		this.setState({
			symbol: goodRun ? '-' : '+',
			header: goodRun ? 'Subtract' : 'Add'
		})
  }

	handleChange = async event => this.sliderChange(parseFloat(`${this.state.symbol}0.${event.target.value}`))

	render() {
		return(
			<div>
				<Row className='justify-content-center'>
					<h3>{this.state.header} a Percentage</h3>
				</Row>
				<Row className='slider justify-content-center'>
					<label className='sr-only' htmlFor="percentageSlider">{this.state.header} modifier to cash rewards</label>
					<input type="range" className="custom-range" min="10" max="20" id="percentageSlider" defaultValue='0' onChange={this.handleChange} />
					<span>{this.state.symbol}10%</span>
					<span></span>
					<span>{this.state.symbol}20%</span>
				</Row>
			</div>
		)
	}
}

export default ModifierRun