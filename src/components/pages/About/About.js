import React from 'react'

import AboutCenter from '../../components/AboutCenter/AboutCenter'
import ContactBar from '../../components/ContactBar/ContactBar'
import SkillsList from '../../components/SkillsList/SkillsList'
import ProductionCycle from '../../components/ProductionCycle/ProductionCycle'

class About extends React.Component {
  render() {
    return (
      <div className="About text-white">
        <AboutCenter />
        <ContactBar />
        <SkillsList />
        <ProductionCycle />
      </div>
    )
  }
}

export default About