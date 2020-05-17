import React from 'react'
import axios from 'axios'

import { Container, Col, Row } from 'react-bootstrap'

import BeastTable from './components/BeastTable/BeastTable'

class ShadowoftheDemonLord extends React.Component {
  constructor(props) {
    super(props)

    this.state = {beasts: []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/ShadowoftheDemonLord/')
    .then(response => {
      this.setState({ beasts: response.data })
      console.log(this.state.beasts)
    })
    .catch(error => console.log(error) )
  }

  render() {
    return (
      <Container className="ShadowoftheDemonLord text-white">
        <Row>
          <Col>
            <h2>Total</h2>
          </Col>
          <Col>
            <h2>Beasts</h2>
            <BeastTable beasts={this.state.beasts} />
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord