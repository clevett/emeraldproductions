import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import ReactGA from 'react-ga';
ReactGA.initialize(process.env.GA_Key);

ReactDOM.render(<App />, document.getElementById('root'));

