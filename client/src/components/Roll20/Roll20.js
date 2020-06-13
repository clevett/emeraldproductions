import React from 'react'
import axios from 'axios'

import { Container, Carousel} from 'react-bootstrap'
import './Roll20.scss'

class Roll20 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: [],
    }
  }

  componentDidMount() {
    axios.get('https://emeraldproductions.herokuapp.com/Roll20CharSheets/')
      .then(response => this.setState({ sheets: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Container className='Roll20 text-white'>
        <h1>Character Sheets</h1>
        <p>Roll20 character sheets that I have designed and published.</p>
        <Carousel>
          {
            this.state.sheets.map(sheet => {
              return (
                <Carousel.Item key={sheet._id}>
                  <img
                    src={`/assets/images/${sheet.image}`}
                    alt={sheet.name}
                  />
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </Container>
    )
  }
}

export default Roll20