import React from 'react'
import { Container } from 'react-bootstrap'

import AboutCenter from './AboutCenter/AboutCenter'
import ContactBar from '../ContactBar/ContactBar'

const About = () => {
  return (
    <Container className='About text-white'>
      <AboutCenter />
      <ContactBar />
    </Container>
  )
}

export default About