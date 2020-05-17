import React from 'react'
import axios from 'axios'

import { Container, Col, Row } from 'react-bootstrap'

const BeastTableRow = props => (
  <tr>
    <th>{props.beastData.name}</th>
    <td>{props.beastData.difficulty}</td>
    <td>{props.beastData.descriptor}</td>
    <td>{props.beastData.source}</td>
  </tr>
)

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

  beastList() {
    return this.state.beasts.map(beastData => <BeastTableRow beastData={beastData} key={beastData._id} /> )
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
            <table className="table text-white table-striped table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Difficulty</th>
                  <th scope="col">Descriptor</th>
                  <th scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                { this.beastList() }
              </tbody>
            </table>
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default ShadowoftheDemonLord