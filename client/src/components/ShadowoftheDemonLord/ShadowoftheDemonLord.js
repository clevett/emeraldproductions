import React from 'react'
import axios from 'axios'

import { Container, Col, Row } from 'react-bootstrap'

import BeastTable from './BeastTable/BeastTable'
import SearchBar from './SearchBar/SearchBar'

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

  findIndex = beast => this.state.selected.indexOf(beast)

  addBeast = beast => {
    const index = this.findIndex(beast)
    let selectedList = this.state.selected

    if (index >= 0) {
      let currentEntry = selectedList[index]
      currentEntry.total += 1
      selectedList.splice(index, 1, currentEntry)
    } else {
      beast.total = 1
      selectedList.splice(selectedList.length + 1, 1, beast)
    }

    this.setState({ selected: selectedList })
    this.setState({ difficulty: this.state.difficulty + beast.difficulty })
  }

  removeBeast = beast => {
    const index = this.findIndex(beast)
    let selectedList = this.state.selected
    let currentEntry = selectedList[index]

    if (index >= 0 && currentEntry.total > 1) {
      currentEntry.total -= 1
      selectedList.splice(index, 1, currentEntry)
    } else  {
      selectedList = selectedList.filter(selected => selected._id !== beast._id)
    }

    this.setState({ selected: selectedList })
    this.setState({ difficulty: this.state.difficulty - beast.difficulty })
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
            <BeastTable beasts={this.state.selected} buttonType={'remove'} beastButton={this.removeBeast} />
          </Col>
          <Col>
            <h2>Beasts</h2>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <BeastTable beasts={this.state.search} buttonType={'add'} beastButton={this.addBeast} />
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord