
import React from 'react'
import Roll from 'roll'

import { Container, Button, Row, CardGroup } from 'react-bootstrap'

import DisplayCard from '../DisplayCard/DisplayCard'
import NaturalLanguage from './NaturalLanguage/NaturalLanguage'
import ShadowrunHeader from '../ShadowrunHeader/ShadowrunHeader'

//Images & Styling
import './MissionCreation.scss'

import data from  './data.js'

class MissionCreation extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			options: ['location', 'job', 'macguffin', 'employer', 'twist'],

			locationTable: [],
			jobTable: [],
			macguffinTable: [],
			employerTable: [],
			twistTable: [],

			employer: '',
			location: '',
			job: '',
			macguffin: '',
			twist: ''
    }
	}

	componentDidMount = () => this.loadData()

	loadData = async () => {
		const update = {}
		await this.state.options.forEach(name => {
			update[`${name}Table`] = data.filter(object => object.table === name)
		})
		this.setState(update)
		this.updateAll()
	}

	diceRoll = quantity => new Roll().roll(`${quantity || 1}d6`).result

	randomMission = async table => {
		const quantity = table === 'employer' ? 2 : 1
		const roll = await this.diceRoll(quantity)
		const result = data.find(object => object.table === table && object.result.includes(roll))
		this.setState({ [`${table}`]: result })
	}

	updateAll = () => this.state.options.forEach(name => this.randomMission(name) )

  handleSubmit = async event => {
    event.preventDefault()
		this.updateAll()
	}
	
	render() {
		return (
      <Container className="ShadowrunMissionCreation content text-white">
				<ShadowrunHeader headerText="Mission Generator" />
				<Row className='mb-5'>
					<NaturalLanguage employer={this.state.employer} location={this.state.location} job={this.state.job} macguffin={this.state.macguffin} twist={this.state.twist} />
				</Row>
				<Row className='mb-5 content'>
					<CardGroup className='mb-5 w-100'>
						<DisplayCard title='Employer' result={this.state.employer} />
						<DisplayCard title='Meet Location' result={this.state.location} />
						<DisplayCard title='Job Type' result={this.state.job} />
					</CardGroup>
					<CardGroup className='w-100'>
						<DisplayCard title='MacGuffin' result={this.state.macguffin} />
						<DisplayCard title='Twist' result={this.state.twist} />
					</CardGroup>
				</Row>
				<Row className='d-grid justify-content-end'>
					<Button onClick={this.handleSubmit} type="button">Generate New Mission</Button>
				</Row>
			</Container>
		)
	}
}

export default MissionCreation