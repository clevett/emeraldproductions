import React from 'react'
import { Row } from 'react-bootstrap'

import convertRunType from './helper/convertRunType'

class RunTypeSlider extends React.Component {
	constructor(props) {
		super(props)
		this.state =  {
			type: 'standard'
		}
	}

	sliderChange = async event => {
		const newRunType = convertRunType(event.target.value)

		if (this.state.type !== newRunType) {
			await this.setState({
				type: newRunType
			})

			this.props.updateState('type', this.state.type)
		}
  }

	render() {
		return (
			<Row className='slider justify-content-center'>
				<label className='sr-only' htmlFor="runType">Choose run type</label>
				<input type="range" className="custom-range" min="0" max="2" id="runType" defaultValue='1' onChange={this.sliderChange} />
				<span>Good feels</span>
				<span>Standard</span>
				<span>Cold-hearted</span>
			</Row>
		)
	}
}

export default RunTypeSlider