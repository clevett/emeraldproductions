import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row } from 'react-bootstrap'

import NavigationBar from '../Navigation/NavigationBar/NavigationBar'
import About from '../About/About'
import ContactPage from '../ContactPage/ContactPage'
import Roll20CharSheets from '../Roll20/Roll20CharSheets/Roll20CharSheets'
import Footer from '../Footer/Footer'

//Five Torches Deep
import FiveTorchesDeepMonsters from '../FiveTorchesDeep/Convert5eMonsters/Convert5eMonsters'
import FiveTorchesDeepRandomMapGenerator from '../FiveTorchesDeep/RandomMapGenerator/RandomMapGenerator'
//SODL
import ShadowoftheDemonLordEncounterBuilder from '../ShadowoftheDemonLord/EncounterBuilder/EncounterBuilder'
import ShadowoftheDemonLordTravelTool from '../ShadowoftheDemonLord/TravelTool/TravelTool'
import ShadowoftheDemonLordRewardsCalculator from '../ShadowoftheDemonLord/RewardsGenerator/RewardsGenerator'
//Shadowrun
import ShadowrunMissionCreation from '../Shadowrun/MissionCreation/MissionCreation'
import ShadowrunRewardsCalculator from '../Shadowrun/RewardsCalculator/RewardsCalculator'

import Analytics from 'react-router-ga'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-181637915-1')
ReactGA.pageview(window.location.pathname + window.location.search) 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Row>
          <NavigationBar />
        </Row>
        <Row className='Center bg-primary'>
          <div className='bg-overlay'>
            <Analytics id={'UA-181637915-1'}>
              <Route path="/" exact component={About} />
              <Route path="/five_torches_deep/5e_monsters" component={FiveTorchesDeepMonsters} />
              <Route path="/five_torches_deep/random_map_generator" component={FiveTorchesDeepRandomMapGenerator} />
              <Route path="/roll_20_character_sheets" component={Roll20CharSheets} />
              <Route path="/shadow_of_the_demon_lord/encounter_builder" component={ShadowoftheDemonLordEncounterBuilder} />
              <Route path="/shadow_of_the_demon_lord/rewards_generator" component={ShadowoftheDemonLordRewardsCalculator} />
              <Route path="/shadow_of_the_demon_lord/travel_tool" component={ShadowoftheDemonLordTravelTool} />
              <Route path="/shadowrun/mission_creation" component={ShadowrunMissionCreation} />
              <Route path="/shadowrun/rewards_calculator" component={ShadowrunRewardsCalculator} />
              <Route path="/contact" component={ContactPage} />
            </Analytics>
          </div>
        </Row>
        <Footer />
      </div>
    </Router>
  );
}

export default App
