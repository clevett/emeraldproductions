import React from 'react'

import { Carousel } from 'react-bootstrap'

const CarouselItem = props => {
  const { sheet } = props
  console.log(sheet)
  return (
    <Carousel.Item >
        <img
          className="d-block w-100"
          src={sheet.src}
          alt={sheet.name}
        />
    </Carousel.Item >
  )
}

export default CarouselItem