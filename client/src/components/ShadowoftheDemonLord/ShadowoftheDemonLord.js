import React from 'react'
import axios from 'axios'

import { Container, Col, Row } from 'react-bootstrap'

import BeastTable from './BeastTable/BeastTable'
import SearchBar from './SearchBar/SearchBar'


import './ShadowoftheDemonLord.scss'

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
        <Row className='text-center mb-3'>
          <h1 className='w-100'>Shadow of the Demon Lord Encounter Builder</h1>
        </Row>
        <Row>
          <Col className='col-12 col-lg-7'>
            <h2>Encounter Difficulty ({this.state.difficulty})</h2>
            <Row className='text-left mb-3'>
              <Col>
                <h3>Level</h3>
                <select>
                  <option value='starting'>Starting</option>
                  <option value='novice'>Novice</option>
                  <option value='expert'>Expert</option>
                  <option value='master'>Master</option>
                </select>
              </Col>
              <Col>
                <h3>Easy</h3>
                <span>3 or less</span>
              </Col>
              <Col>
                <h3>Average</h3>
                <span>4-15</span>
              </Col>
              <Col>
                <h3>Challenging</h3>
                <span>16-30</span>
              </Col>
              <Col>
                <h3>Hard</h3>
                <span>31 or more</span>
              </Col>
              <Col>
                <h3>Max. Creature Difficulty</h3>
                <span>25</span>
              </Col>
            </Row>
            <Row>
              <BeastTable beasts={this.state.selected} buttonType={'remove'} beastButton={this.updateEncounter} />
            </Row>
          </Col>
          <Col className='col-12 col-lg-5'>
            <h2>Beastiary</h2>
            <Row className='text-left mb-3'>
              <Col>
                <h3>Difficult Rating</h3>
                <select>
                  <option>1</option>
                </select>
              </Col>
              <Col>
                <h3>Descriptor</h3>
              </Col>
              <Col>
                <h3>Source</h3>
              </Col>
            </Row>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <BeastTable beasts={this.state.search} buttonType={'add'} beastButton={this.updateEncounter} />
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord