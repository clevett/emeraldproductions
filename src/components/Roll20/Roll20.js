import React from 'react'
import axios from 'axios'

import { Container, Carousel} from 'react-bootstrap'
import './Roll20.scss'
import CarouselItem from './CarouselItem/CarouselItem'
import { imageList } from './images/imageList'

class Roll20 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Roll20/')
      .then(response => {
        this.setState({ sheets: response.data })
        console.log(this.state.sheets)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Container className='Roll20 text-white'>
        <Carousel>
          {
            imageList.map(sheet => <CarouselItem key={sheet.name} sheet={sheet} />)
          }
        </Carousel>
      </Container>
    )
  }
}

export default Roll20