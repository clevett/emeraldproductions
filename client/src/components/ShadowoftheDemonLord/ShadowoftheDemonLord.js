import React from 'react'
import axios from 'axios'

//Components
import { Container, Col, Row, Spinner } from 'react-bootstrap'
import BeastTable from './BeastTable/BeastTable'
import SearchBar from './SearchBar/SearchBar'
import SelectBuilder from '../SelectBuilder/SelectBuilder'

//Helper function
import { addBeast, removeBeast } from './Encounter Builder/updateSelected'

import './ShadowoftheDemonLord.scss'

class ShadowoftheDemonLord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beasts: [],
      search: [],
      searchStatus: 'loading',
      selected: [],
      difficulty: 0,
      levels: {
        options: ['Starting', 'Novice', 'Expert', 'Master'],
        selected: 'Novice',
        danger: {
          easy: '10 or less',
          average: '11-30',
          challenging: '31-50',
          hard: '50 or more',
          max: '100'
        }
      }
    }
  }

  componentDidMount = () => this.onTermSubmit('1')

  onTermSubmit = async term => {
    await axios.get('https://emeraldproductions.herokuapp.com/api/ShadowoftheDemonLord/')
    .then(response => {
      this.setState({ beasts: response.data, searchStatus: 'done' })
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

  spinnerToggle = () => {
    if (this.state.searchStatus === 'done') {
      return <BeastTable beasts={this.state.search} buttonType={'add'} beastButton={this.updateEncounter} />
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
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
                <SelectBuilder options={this.state.levels.options} selected={this.state.levels.selected} />
              </Col>
              <Col>
                <h3>Easy</h3>
                <span>{this.state.levels.danger.easy}</span>
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
            {this.spinnerToggle()}
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord