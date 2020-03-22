import React from 'react';
import '../../index.scss';
import './App.scss';

import { Navigation } from '../Navigation/Navigation';
import { ContactBar } from '../ContactBar/ContactBar';
import  AppCenter  from '../AppCenter/AppCenter';

import discord  from '../../imgs/Discord-Icon.png';
import github  from '../../imgs/GitHub-Icon.png';
import linkedIn  from '../../imgs/LinkedIN-Icon.png';
const contacts = [{name: 'GitHub', src:github}, {name: 'Discord', src:discord}, {name: 'LinkedIN', src: linkedIn}]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <AppCenter />
        <ContactBar contacts={contacts} />
      </div>
    );
  }
}

export default App;
