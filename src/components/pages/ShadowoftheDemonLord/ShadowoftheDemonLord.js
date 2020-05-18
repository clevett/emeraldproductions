import React from 'react'
import axios from 'axios'

import { Container, Col, Row } from 'react-bootstrap'

import BeastTable from './components/BeastTable/BeastTable'
import SearchBar from './components/SearchBar/SearchBar'

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
    const response = await axios.get('http://localhost:5000/ShadowoftheDemonLord/')
    .then(response => {
      this.setState({ beasts: response.data })
      console.log(this.state)
    })
    .catch(error => console.log(error) )


    const filter = []
    this.state.beasts.forEach(beast => {
      const searchableValue = value => value.toString().toLowerCase()
      Object.values(beast).forEach(value => searchableValue(value) === term.toLowerCase() ? filter.push(beast) : false)
    })

    this.setState({ search: filter })
  }



  //TO DO: This function needs to look for duplicates
  //TO DO: It should increase a running total instead of adding a new one
  addBeast = beast => {
    const newSelectedBeastList = this.state.selected.concat([beast])
    this.setState({ selected: newSelectedBeastList })
    this.setState({ difficulty: this.state.difficulty += beast.difficulty })
  }

  //TO DO: This function will need to remove a single on if there is duplicate
  //TO DO: It should increase a decrease total instead of adding a new one
  removeBeast = beast => {
    const currentSelected = this.state.selected
    const newSelectedBeastList = currentSelected.filter(selected => selected._id != beast._id)
    this.setState({ selected: newSelectedBeastList })
    this.setState({ difficulty: this.state.difficulty -= beast.difficulty })
  }
  
  render() {
    return (
      <Container className="ShadowoftheDemonLord text-white">
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