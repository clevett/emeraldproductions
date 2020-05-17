import React from 'react'
import axios from 'axios'

import { Container, Col, Row } from 'react-bootstrap'

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
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <section className='Center d-flex align-items-center bg-primary'>
        <Container className="ShadowoftheDemonLord text-white">
            <Row>
              <Col>
                <h2>Total</h2>
              </Col>
              <Col>
                <h2>Beasts</h2>
                <input id='term' placeholder='Search term' type='text' value='animal' />
              </Col> 
            </Row>
        </Container>
      </section>
    )
  }
}

export default ShadowoftheDemonLord