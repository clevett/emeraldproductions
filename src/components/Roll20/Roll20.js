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
    axios.get('http://localhost:5000/Roll20/')
      .then(response => this.setState({ sheets: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Container className='Roll20 text-white'>
        <h1>Character Sheets</h1>
        <Carousel>
          {
            this.state.sheets.map(sheet => {
              return (
                <Carousel.Item>
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