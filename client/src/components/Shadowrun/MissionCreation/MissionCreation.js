
import React from 'react'
import axios from 'axios'

import { Container, Button, Row, } from 'react-bootstrap'
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
			this.setState({ 
				locationTable: data.filter(object => object.table === 'location'),
				jobTable: data.filter(object => object.table === 'job'),
				macguffinTable: data.filter(object => object.table === 'macguffin'),
				employerTable: data.filter(object => object.table === 'employer'),
				twistTable: data.filter(object => object.table === 'twist')
			})
			console.log(response.data)
    })
		.catch(error => console.log(error))

		this.randomMission('location')
		this.randomMission('job')
		this.randomMission('macguffin')
		this.randomMission('employer')
		this.randomMission('twist')
	}
	
	d6 = () => 1 + Math.floor(Math.random()*6)

	randomMission = table => {
		const roll = table === 'employer' ? this.d6() + this.d6() : this.d6()
		const data = this.state[`${table}Table`]
		const result = data.find(object => object.result.includes(roll))
		this.setState({ [`${table}`]: result.description })
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