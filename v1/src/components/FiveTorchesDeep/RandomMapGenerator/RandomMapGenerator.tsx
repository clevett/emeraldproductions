import React, { useState } from 'react'
import { Button, Container, Row } from "react-bootstrap"

import Box from "./Box/Box"
import DriveThruLink from '../../DriveThruLink/DriveThruLink'
import logo from "../logo.jpg"

import './RandomMapGenerator.scss'

const RandomMapGenerator = () => {
  const [ refresh, setRefresh ] = useState(false)

  const handleClick = () => setRefresh(!refresh)

  return (
    <Container className='FTDFifthEditionMonsters content text-white'>
      <Row className='header-row text-center mb-3 justify-content-center w-100'>
        <img alt='five with a torch flame' src={logo}></img>
        <DriveThruLink id='264584' name='Five Torches Deep' />
        <h1 className='mb-0'>Random Map Generator</h1>
        <img alt='five with a torch flame' src={logo}></img>
      </Row>
      <div className='RandomMapGeneator'>
        <div key={`map-${refresh}`} className='Map'>
          <Box name='Northwest'  />
          <Box name='North'  />
          <Box name='Northeast'  />

          <Box name='West'  />
          <Box name='Center'  />
          <Box name='East'  />

          <Box name='Southwest'  />
          <Box name='South'  />
          <Box name='Southeast'  />
        </div>
        <div className='mt-3'>
          <Button onClick={handleClick}>Generator New Map</Button>
        </div>
      </div>
    </Container>
  )
}

export default RandomMapGenerator