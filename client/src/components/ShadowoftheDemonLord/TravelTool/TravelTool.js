import React from 'react'

import { Container, Col, Row, CardGroup } from 'react-bootstrap'
import RPGHeader from '../RPGHeader/RPGHeader'
import TravelCard from './TravelCard/TravelCard'

class TravelTool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = () => {
    //this.loadData()
	}
	
	render() {
		return (
      <Container className="TravelTool content text-white">
        <RPGHeader title='Travel Tool' />
        <Row className='content'>
					<CardGroup className='mb-5 w-100'>
						<TravelCard title='Miles per Hour' result='3' />
						<TravelCard title='Hours of Travel' result='1' />
					</CardGroup>
				</Row>
				<Row className='content w-100'>
					<Col>
						<h2>Terrain</h2>
					</Col>
					<Col>
						<h2>Weather</h2>
						<select></select>
					</Col>
					<Col>
						<h2>Pace</h2>
						<select></select>
					</Col>
					<Col>
						<h2>Miles to Travel</h2>
						<input type='number' />
					</Col>
				</Row>
				<Row className='content mt-5'>
					<CardGroup className='mb-5 w-100'>
						<TravelCard title='Random Encounter' result='Harmless' />
						<TravelCard title='Getting Lost' result='On track' />
					</CardGroup>
					<Row className='content w-100'>
						<Col>
							<h2>Threat Level</h2>
						</Col>
						<Col>
							<h2>Navigator</h2>
						</Col>
					</Row>
				</Row>
			</Container>
		)
	}
}

export default TravelTool