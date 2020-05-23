import React from 'react'

import { Carousel } from 'react-bootstrap'

const CarouselItem = props => {
  const { sheet } = props
  const src = `/src/imgs/charsheets/${sheet.image}`
  return (
    <Carousel.Item >
        <img
          className="d-block w-100"
          src={src}
          alt={sheet.name}
        />
    </Carousel.Item >
  )
}

export default CarouselItem