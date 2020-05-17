import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";

//import "bootstrap/dist/css/bootstrap.min.css"

import NavigationBar from '../Navigation/NavigationBar/NavigationBar'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Roll20 from '../pages/Roll20/Roll20'
import ShadowoftheDemonLord from '../pages/ShadowoftheDemonLord/ShadowoftheDemonLord'
import Footer from '../Footer/Footer'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route path="/" exact component={About} />
          <Route path="/roll20" component={Roll20} />
          <Route path="/ShadowoftheDemonLord" component={ShadowoftheDemonLord} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
