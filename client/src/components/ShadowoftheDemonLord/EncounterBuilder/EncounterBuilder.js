// @version 1.1

import React from 'react'
import axios from 'axios'

//Components
import { Container, Col, Row, Spinner } from 'react-bootstrap'

import BeastTable from './BeastTable/BeastTable'
import SearchBar from '../../SearchBar/SearchBar'
import SelectBuilder from '../../SelectBuilder/SelectBuilder'
import EncounterDanger from './EncounterDanger/EncounterDanger'
import RPGHeader from '../RPGHeader/RPGHeader'
import Footer from '../Footer/Footer'

//Helper function
import { addBeast, removeBeast } from './helpers/updateSelected/updateSelected'
import fuzzySearch from '../../SearchBar/fuzzySearch/fuzzySearch'

//Images & Styling
import './EncounterBuilder.scss'

class EncounterBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beasts: [],
      searchResults: [],
      searchStatus: 'loading',
      selected: [],
      selectedLevel: 'novice',
      levelOptions: ['starting', 'novice', 'expert', 'master'],
      difficulty: 0,
      difficultyOptions: [1, 5, 10, 25, 50, 100, 250, 500]
    }
  }

  componentDidMount = () => {
    this.loadData()
  }

  loadData = async () => {
    await axios.get('https://emeraldproductions.herokuapp.com/api/ShadowoftheDemonLord/encounter_builder')
    .then(response => {
      this.setState({ beasts: response.data, searchStatus: 'done' })
    })
    .catch(error => console.log(error)) 

    this.onTermSubmit('human')
  }

  onTermSubmit = term => {
    const keys = ["name", "difficulty", "descriptor", "source"]
    const results = fuzzySearch(this.state.beasts, term, keys)
    this.setState({ searchResults: results })
  }

  updateEncounter = (beast, buttonAction) => {
    const selected = buttonAction === 'add' ? addBeast(this.state.selected, beast) : removeBeast(this.state.selected, beast)
    const difficulty = buttonAction === 'add' ? this.state.difficulty + beast.difficulty : this.state.difficulty - beast.difficulty
    this.setState({ selected })
    this.setState({ difficulty })
  }

  spinnerToggle = () => {
    if (this.state.searchStatus === 'done') {
      return <BeastTable beasts={this.state.searchResults} buttonType={'add'} beastButton={this.updateEncounter} />
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
  }

  onSelectValueChange = value => this.setState({selectedLevel: value})
  
  render() {
    return (
      <Container className="EncounterBuilder content text-white">
        <RPGHeader title='Encounter Builder' />
        <Row>
          <Col className='col-12 col-lg-7'>
            <h2>Encounter Difficulty ({this.state.difficulty})</h2>
            <Row className='text-left mb-3'>
              <Col>
                <h3>Level</h3>
                <SelectBuilder
                  id="sodl-encounter-level"
                  label="select character level"
                  options={this.state.levelOptions} 
                  selected={this.state.selectedLevel} 
                  onSelectValueChange={this.onSelectValueChange} 
                />
              </Col>
              <EncounterDanger selected={this.state.selectedLevel} />
            </Row>
            <Row>
              <BeastTable beasts={this.state.selected} buttonType={'remove'} beastButton={this.updateEncounter} />
            </Row>
          </Col>
          <Col className='col-12 col-lg-5'>
            <h2>Bestiary</h2>
            <SearchBar onTermSubmit={this.onTermSubmit} />
            {this.spinnerToggle()}
          </Col> 
        </Row>
        <Footer />
      </Container>
    )
  }
}

export default EncounterBuilder