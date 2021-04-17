
import React from "react"
import { Container, CardGroup, Row, Card } from "react-bootstrap"

import { appearance, personality, flaw, bond, ideal } from './data/characteristics'

import { names } from "../Merchants/data/names"

import './Merchants.scss'


const Merchants = () => {


  return (
    <Container className='DDMerchantsTraders content text-white'>
      <h1>Walrock Homebrew's       
          <a className="ml-2" href="https://www.dmsguild.com/product/209113/WH-Traders--Merchants-Inventories-for-30-different-types-of-merchants">
          Merchants & Traders
      </a>
      </h1>
      <CardGroup className='header-row text-center mb-3 justify-content-center w-100'>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Header>{names["Human"]["Bedine"]["Female"][0]}</Card.Header>
          <Card.Body>
            <div>{appearance[0]}</div>
            <div><strong>Bond:</strong> {bond[0]}</div>
            <div><strong>Flaw:</strong> {flaw[0]}</div>
            <div><strong>Idea:</strong> {ideal[0].name}</div>
            <div><strong>Personality:</strong> {personality[0]}</div>
          </Card.Body>
        </Card>
        <Card>
          Inventory
        </Card>
      </CardGroup>
      <Row className='justify-content-center'>
        <i>Created using Merchants & Traders by Walrock Homebrew v1.2. Please support this creator.</i>
      </Row>
      <Row className='justify-content-center'>
        Names & appearance come from <a href='https://github.com/Tetra-cube/Tetra-cube.github.io'>Tetra-cube.</a>
      </Row>
    </Container>
  )
}

export default Merchants