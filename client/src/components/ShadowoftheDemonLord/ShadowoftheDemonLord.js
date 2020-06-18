import React from 'react'
import axios from 'axios'

//Components
import { Container, Col, Row, Spinner } from 'react-bootstrap'
import BeastTable from './EncounterBuilder/BeastTable/BeastTable'
import SearchBar from './SearchBar/SearchBar'
import SelectBuilder from '../SelectBuilder/SelectBuilder'
import EncounterDifficulty from './EncounterBuilder/EncounterDanger/EncounterDanger'

//Helper function
import { addBeast, removeBeast } from './EncounterBuilder/updateSelected'

import './ShadowoftheDemonLord.scss'

class ShadowoftheDemonLord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beasts: [],
      search: [],
      searchStatus: 'loading',
      selected: [],
      selectedLevel: 'Novice',
      levelOptions: ['Starting', 'Novice', 'Expert', 'Master'],
      difficulty: 0
    }
  }

  componentDidMount = () => this.onTermSubmit('human')

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

  selectChange = option => {
    console.log(option)
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
                <SelectBuilder options={this.state.levelOptions} selected={this.state.selectedLevel} onChange={this.selectChange} />
              </Col>
              <EncounterDifficulty selected={this.state.selectedLevel} />
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