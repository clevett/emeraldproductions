import React from 'react';
import logo from './logo.png';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import './bootstrap/dist/css/bootstrap.css';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header fluid">
        <img src={logo} alt="logo" />
      </header>
      <Navigation />
      <Container className='bg-primary'>
        <Row>
          dfasfdasfadsfadsfadsfsd
        </Row>
      </Container>
    </div>
  );
}

export default App;
