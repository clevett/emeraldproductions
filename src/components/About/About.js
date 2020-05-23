import React from 'react'
import { Container } from 'react-bootstrap'

import AboutCenter from '../AboutCenter/AboutCenter'
import ContactBar from '../ContactBar/ContactBar'
//import SkillsList from '../../SkillsList/SkillsList'
//import ProductionCycle from '../../ProductionCycle/ProductionCycle'

class About extends React.Component {
  render() {
    return (
      <Container className='About text-white'>
        <AboutCenter />
        <ContactBar />
      </Container>
    )
  }
}

export default About