
import React from 'react'
import axios from 'axios'

import { Container, Button, Row, CardGroup } from 'react-bootstrap'
import DriveThruLink from '../../DriveThruLink/DriveThruLink'

import Card from './Card/Card'

//Images & Styling
import dragon from '../dragon.png'
import './MissionCreation.scss'

import mockdata from  './mockdata.js'

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

	componentDidMount = () => {
		this.loadData()
	}

  loadData = async () => {
    await axios.get('http://localhost:5000/api/ShadowrunMissionCreation')
    .then(response => {
			const data = mockdata
			const update = {}
			this.state.options.forEach(name => {
				update[`${name}Table`] = data.filter(object => object.table === name)
			})
			this.setState(update)
			console.log(response.data)
    })
		.catch(error => console.log(error))
		this.updateAll()
	}
	
	d6 = () => 1 + Math.floor(Math.random()*6)

	randomMission = table => {
		const roll = table === 'employer' ? this.d6() + this.d6() : this.d6()
		const data = this.state[`${table}Table`]
		const result = data.find(object => object.result.includes(roll))
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
        <Row className='header text-center mb-5 justify-content-center w-100'>
          <img alt='shadowrun dragon logo' src={dragon}></img>
					<DriveThruLink id='115985' name='Shadowrun' />
          <h1 className='mb-0'>Mission Creation</h1>
          <img alt='shadowrun dragon logo' src={dragon}></img>
        </Row>
				<Row className='mb-3 justify-content-center'>
					<CardGroup>
						<Card title='Employer' result={this.state.employer} />
						<Card title='Meet Location' result={this.state.location} />
						<Card title='Job Type' result={this.state.job} />
					</CardGroup>
				</Row>
				<Row className='mb-5 justify-content-center'>
					<CardGroup>
						<Card title='MacGuffin' result={this.state.macguffin} />
						<Card title='Twist' result={this.state.twist} />
					</CardGroup>
				</Row>
				<Row className='d-grid justify-content-end'>
					<Button onSubmit={this.handleSubmit} type="submit">Generate New Mission</Button>
				</Row>
			</Container>
		)
	}
}

export default MissionCreation