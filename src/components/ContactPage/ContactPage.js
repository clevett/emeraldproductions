import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

class ContactPage extends React.Component {
  render() {
    return (
      <div className="ContactPage text-white">
        <Navigation />
        <AppCenter />
        <ContactBar />
      </div>
    )
  }
}