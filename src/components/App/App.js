import React from 'react'
import './App.scss'

import Navigation from '../Navigation/Navigation'
import AppCenter  from '../AppCenter/AppCenter'
import ContactBar from '../ContactBar/ContactBar'
import SkillsList  from '../SkillsList/SkillsList'

class App extends React.Component {
  render() {
    return (
      <div className="App text-white">
        <Navigation />
        <AppCenter />
        <ContactBar />
        <SkillsList />
      </div>
    );
  }
}

export default App
