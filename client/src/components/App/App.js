import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row } from 'react-bootstrap'

import NavigationBar from '../Navigation/NavigationBar/NavigationBar'
import About from '../About/About'
import ContactPage from '../ContactPage/ContactPage'
import Roll20CharSheets from '../Roll20/Roll20CharSheets/Roll20CharSheets'
import ShadowoftheDemonLord from '../ShadowoftheDemonLord/ShadowoftheDemonLord'
import ShadowrunMissionCreation from '../Shadowrun/MissionCreation/MissionCreation'
import Footer from '../Footer/Footer'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Row>
            <NavigationBar />
          </Row>
          <Row className='Center bg-primary'>
            <Route path="/" exact component={About} />
            <Route path="/roll_20_character_sheets" component={Roll20CharSheets} />
            <Route path="/shadow_of_the_demon_lord" component={ShadowoftheDemonLord} />
            <Route path="/shadowrun/mission_creation" component={ShadowrunMissionCreation} />
            <Route path="/contact" component={ContactPage} />
          </Row>
          <Row>
            <Footer />
          </Row>
        </div>
      </Router>
    );
  }
}

export default App
