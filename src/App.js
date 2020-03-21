import React from 'react';
import logo from './imgs/logo.png';
import portrait from './imgs/takedown.png';
import './App.css';
import './scss/custom.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header fluid">
        <img src={logo} alt="Emerald Productions, LLC" />
      </header>
      <Navigation />
      <body>
        <Container className='bg-primary'>
          <Row>
            <Col>
              <img src={portrait} alt='super hero known as Takedown' />
            </Col>
            <Col>
              <h1>Cassie Levett</h1>
              <h2>Front-End Developer</h2>
              <section>Building solutions one challenge at a time.</section>
            </Col>
          </Row>
        </Container>
      </body>

    </div>
  );
}

export default App;
