import React from 'react';
import portrait from '../../imgs/takedown.png';
import '../../index.scss';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from '../Navigation/Navigation';
import { ContactBar } from '../ContactBar/ContactBar';

import Image from 'react-bootstrap/Image'

const contact = {
  name: 'GitHub',
  src: `./imgs/GitHub-Icon.png`
}

const contacts = [contact, contact, contact]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Row className='bg-primary'>
          <Container className='bg-primary'>
            <Col xs={6} md={5} className='portrait'>
              <Image className='box-shadow' src={portrait} alt='super hero known as Takedown' />
            </Col>
            <Col xs={6} md={7} className='text-left'>
              <section className='description'>
                <h1>Cassie Levett</h1>
                <h2>Front-End Developer</h2>
                <span>Building solutions one challenge at a time.</span>
              </section>
            </Col>
          </Container>
        </Row>
        <ContactBar contacts={contacts} />
      </div>
    );
  }
}

export default App;
