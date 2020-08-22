import React from 'react'
import axios from 'axios'

//Components
import { Container, Col, Row, Spinner } from 'react-bootstrap'
import DriveThruLink from '../DriveThruLink/DriveThruLink'

import BeastTable from './EncounterBuilder/BeastTable/BeastTable'
import SearchBar from '../SearchBar/SearchBar'
import SelectBuilder from '../SelectBuilder/SelectBuilder'
import EncounterDanger from './EncounterBuilder/EncounterDanger/EncounterDanger'

//Helper function
import { addBeast, removeBeast } from './EncounterBuilder/updateSelected'
import fuzzySearch from '../SearchBar/fuzzySearch'

//Images & Styling
import pentagram from './pentagram-hi.png'
import './ShadowoftheDemonLord.scss'

class ShadowoftheDemonLord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beasts: [],
      search: [],
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
    await axios.get('https://emeraldproductions.herokuapp.com/api/ShadowoftheDemonLord')
    .then(response => {
      this.setState({ beasts: response.data, searchStatus: 'done' })
    })
    .catch(error => console.log(error)) 

    this.onTermSubmit('human')
  }

  onTermSubmit = term => {
    const results = fuzzySearch(this.state.beasts, term)
    this.setState({ search: results })
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

  onSelectValueChange = value => this.setState({selectedLevel: value})
  
  render() {
    return (
      <Container className="ShadowoftheDemonLord content text-white">
        <Row className='header-row text-center mb-3 justify-content-center w-100'>
          <img alt='bloody pentagram' src={pentagram}></img>
          <DriveThruLink id='155572' name='Shadow of the Demon Lord' />
          <h1 className='mb-0'>Encounter Builder</h1>
          <img alt='bloody pentagram' src={pentagram}></img>
        </Row>
        <Row>
          <Col className='col-12 col-lg-7'>
            <h2>Encounter Difficulty ({this.state.difficulty})</h2>
            <Row className='text-left mb-3'>
              <Col>
                <h3>Level</h3>
                <SelectBuilder options={this.state.levelOptions} selected={this.state.selectedLevel} onSelectValueChange={this.onSelectValueChange} />
              </Col>
              <EncounterDanger selected={this.state.selectedLevel} />
            </Row>
            <Row>
              <BeastTable beasts={this.state.selected} buttonType={'remove'} beastButton={this.updateEncounter} />
            </Row>
          </Col>
          <Col className='col-12 col-lg-5'>
            <h2>Bestiary</h2>
            {/* <Row className='text-left mb-3'>
              <Col>
                <h3>Difficult Rating</h3>
                <SelectBuilder options={this.state.difficultyOptions} selected={1} onSelectValueChange={this.onSelectValueChange} />
              </Col>
              <Col>
                <h3>Descriptor</h3>
              </Col>
              <Col>
                <h3>Source</h3>
              </Col>
            </Row> */}
            <SearchBar onFormSubmit={this.onTermSubmit} />
            {this.spinnerToggle()}
          </Col> 
        </Row>
        <Row className='text-center d-block font-italic'>
          Shadow of the Demon Lord is (c) 2014-2020 Schwalb Entertainment, LLC. All rights reserved. Material here used with permission.
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord