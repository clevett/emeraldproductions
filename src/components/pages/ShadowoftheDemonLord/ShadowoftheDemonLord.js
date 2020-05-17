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
      selected: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/ShadowoftheDemonLord/')
    .then(response => {
      this.setState({ beasts: response.data })
      console.log(this.state)
    })
    .catch(error => console.log(error) )

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

  onBeastSelect = beast => {
    //this.setState({ selectedVideo: video })
  }
  
  render() {
    return (
      <Container className="ShadowoftheDemonLord text-white">
        <Row>
          <Col>
            <h2>Total</h2>
            <BeastTable filtered={this.state.selected} />
          </Col>
          <Col>
            <h2>Beasts</h2>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <BeastTable filtered={this.state.search} />
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord