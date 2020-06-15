import React from 'react'
import axios from 'axios'

import { Container, Col, Row } from 'react-bootstrap'

import BeastTable from './BeastTable/BeastTable'
import SearchBar from './SearchBar/SearchBar'

import { addBeast, removeBeast } from './updateSelected'

class ShadowoftheDemonLord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beasts: [],
      search: [],
      selected: [],
      difficulty: 0
    }
  }

  componentDidMount() {
    this.onTermSubmit('1')
  }

  onTermSubmit = async term => {
    await axios.get('https://emeraldproductions.herokuapp.com/api/ShadowoftheDemonLord/')
    .then(response => {
      this.setState({ beasts: response.data })
    })
    .catch(error => console.log(error) )

    const filter = []
    this.state.beasts.forEach(beast => {
      const searchableValue = value => value.toString().toLowerCase()
      Object.values(beast).forEach(value => searchableValue(value) === term.toLowerCase() ? filter.push(beast) : false)
    })

    this.setState({ search: filter })
  }

  updateEncounter = (beast, buttonAction) => {
    const selected = buttonAction === 'add' ? addBeast(this.state.selected, beast) : removeBeast(this.state.selected, beast)
    const difficulty = buttonAction === 'add' ? this.state.difficulty + beast.difficulty : this.state.difficulty - beast.difficulty
    this.setState({ selected })
    this.setState({ difficulty })
  }
  
  render() {
    return (
      <Container className="ShadowoftheDemonLord text-white">
        <Row className='text-center mb-5'>
          <h1 className='w-100'>Shadow of the Demon Lord Encounter Builder</h1>
        </Row>
        <Row>
          <Col>
            <h2>Total</h2>
            <div><label>Difficulty Total</label> <span>= {this.state.difficulty}</span></div>
            <BeastTable beasts={this.state.selected} buttonType={'remove'} beastButton={this.updateEncounter} />
          </Col>
          <Col>
            <h2>Beasts</h2>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <BeastTable beasts={this.state.search} buttonType={'add'} beastButton={this.updateEncounter} />
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord