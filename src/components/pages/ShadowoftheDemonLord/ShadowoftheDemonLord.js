import React from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'

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
        <Container>
          <div className="ShadowoftheDemonLord text-white">
            "Work in progress"
          </div>
        </Container>
      </section>
    )
  }
}

export default ShadowoftheDemonLord