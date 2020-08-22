
import React from 'react'

import { Container, Button, Row, } from 'react-bootstrap'

import Card from './Card/Card'

//Images & Styling
import dragon from '../dragon.png'
import './MissionCreation.scss'

class MissionCreation extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			employer: 'Secret Society',
			location: 'Astral Space',
			job: 'Datasteal',
			macguffin: 'Magical object',
			twist: 'Security is unexpectedly high'
    }
	}
	
	render() {
		return (
      <Container className="ShadowrunMissionCreation content text-white">
        <Row className='header text-center mb-3 justify-content-center w-100'>
          <img alt='shadowrun dragon logo' src={dragon}></img>
          <a href='https://www.drivethrurpg.com/product/115985/Shadowrun-Fifth-Edition-Core-Rulebook-Master-Index-Edition?affiliate_id=879798' target="_blank">Shadowrun</a>
          <h1 className='mb-0'>Mission Creation</h1>
          <img alt='shadowrun dragon logo' src={dragon}></img>
        </Row>
				<Row className='mb-5'>
					<div className='box text-center w-100'>
						<p>A {this.state.employer} meets you at/in {this.state.location}. They hire you to  perform a/an {this.state.job} involving a/an {this.state.macguffin}.</p>
						<p><i>The twist is {this.state.twist}.</i></p>
					</div>
				</Row>
				<Row className='mb-3 justify-content-center'>
					<Card title='Employer' result={this.state.employer} />
					<Card title='Meet Location' result={this.state.location} />
					<Card title='Job Type' result={this.state.job} />
				</Row>
				<Row className='mb-5 justify-content-center'>
					<Card title='MacGuffin' result={this.state.macguffin} />
					<Card title='Twist' result={this.state.twist} />
				</Row>
				<Row className='d-grid justify-content-end'>
					<Button type="submit">Generate New Mission</Button>
				</Row>
			</Container>
		)
	}
}

export default MissionCreation