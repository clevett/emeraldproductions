import React from 'react'

import AboutCenter from '../../AboutCenter/AboutCenter'
import ContactBar from '../../ContactBar/ContactBar'
//import SkillsList from '../../SkillsList/SkillsList'
//import ProductionCycle from '../../ProductionCycle/ProductionCycle'

class About extends React.Component {
  render() {
    return (
      <div className="About text-white">
        <AboutCenter />
        <ContactBar />
      </div>
    )
  }
}

export default About