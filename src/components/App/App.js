import React from 'react'
import './App.scss'

import Navigation from '../Navigation/Navigation'
import AppCenter  from '../AppCenter/AppCenter'
import ContactBar from '../ContactBar/ContactBar'
import SkillsList  from '../SkillsList/SkillsList'
import ProductionCycle from '../ProductionCycle/ProductionCycle'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App text-white">
        <Navigation />
        <AppCenter />
        <ContactBar />
        <SkillsList />
        <ProductionCycle />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App
