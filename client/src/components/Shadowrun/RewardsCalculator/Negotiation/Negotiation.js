import React from 'react'
import { Row } from 'react-bootstrap'

class Negotiation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			base: 3000,
			increase: 100,
		}
		
		this.updateState = this.props.updateState.bind(this)
	}

	handleChange = async event => {
		const base = 3000 + (100 * event.target.value)
		await this.setState({base})
		this.updateState('nuyenBaseRate', this.state.base)
	}

	render() {
		return(
			<Row className='justify-content-center'>
				<h2>Negotiation Net Hits</h2>
				<small>Base cost may be increased by 100 nuyen per net hit on a Negotiation Test at the start of the run. Current base is {this.state.base}.</small>
				<label className='sr-only' htmlFor='negotiation-net-hits'>negotiation net hits</label>
				<input className='text-center mt-2' id='negotiation-net-hits' min='0' placeholder='0' type='number' onChange={this.handleChange}></input>
			</Row>
		)
	}
}

export default Negotiation