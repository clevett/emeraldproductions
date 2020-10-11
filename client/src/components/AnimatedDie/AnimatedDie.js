import React from 'react'
import Roll from 'roll'
import { Button } from 'react-bootstrap'

import d20 from '../../imgs/icons/dice-twenty-faces-twenty.svg'
import d6 from '../../imgs/icons/perspective-dice-six-faces-six.svg'

import './AnimatedDie.scss'

class AnimatedDie extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			animation: false,
			roll: null,
			rollResult: '',
			size: this.props.dieSize,
			quanity: this.props.dieQuanity || 1,
			image: this.props.dieSize === 'd20' ? d20 : d6
		}
	}

  handleClick = async event => {
		event.preventDefault()
		const roll = new Roll().roll(`${this.state.quanity}${this.state.size}`).result

		//Start Animation
		this.setState({ 
			animation: true,
			roll,
			rollResult: ''
		})

		this.props.dieRoll(roll)
	}

	animationEnd = () => {
		this.setState({ 
			animation: false,
			rollResult: this.state.roll
		})
	}

	altText = () => this.state.rollResult ? `Previous result was ${this.state.rollResult}. Roll a d20.` : `Roll a ${this.props.dieSize}.`

	render() {
		const animation = this.state.animation

		return (
			<div className='d-inline die-row'>
				<Button className={animation ? 'rollDie' : ''} onClick={this.handleClick} onAnimationEnd={this.animationEnd} type="button" variant="link">
					<img alt={this.altText()} src={this.state.image}></img>
				</Button>
				<span className='text-white'>{this.state.rollResult}</span>
			</div>
		)
	}
}

export default AnimatedDie