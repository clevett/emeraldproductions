import React from 'react'
import { Nav } from 'react-bootstrap'

const NavigationLink = ({ reference }) => {
  return <Nav.Link className='text-capitalize text-white font-weight-bold mr-5' href={reference.href} >{reference.name}</Nav.Link>
}

export default NavigationLink