import React from 'react'

import { Container, Image, Col} from 'react-bootstrap'

import deltagreen from './images/deltagreen.png'
import shadowrun5 from './images/shadowrun5e.png'
import pendragon from './images/pendragon.png'
import startrek from './images/startrek.png'
import shadowrun4 from './images/shadowrun4e.png'
import outbreak from './images/outbreak.png'
import './Roll20.scss'

const sheets = [{
  name: 'Delta Green',
  img: './images/deltagreen.png'
}]

class Roll20 extends React.Component {
  render() {
    return (
      <Container className='Roll20 text-white'>
        <Col>
          <Image src={deltagreen} rounded></Image>
        </Col>
        <Col>
          <Image src={shadowrun5} rounded></Image>
        </Col>
        <Col>
          <Image src={startrek} rounded></Image>
        </Col>
        <Col>
          <Image src={shadowrun4} rounded></Image>
        </Col>
        <Col>
          <Image src={outbreak} rounded></Image>
        </Col>
        <Col>
          <Image src={pendragon} rounded></Image>
        </Col>
      </Container>
    )
  }
}

export default Roll20