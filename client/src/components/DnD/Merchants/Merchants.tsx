
import React, { useState, useEffect } from "react"
import { Button, Container, CardGroup, Row, Card } from "react-bootstrap"

import Merchant from "./Merchant/Merchant"
import getSpecialty from "./helpers/getSpecialty"
import getQuality from "./helpers/getQuality"
import getCurrency from "./helpers/getCurrency"

import './Merchants.scss'

const Merchants = () => {
  const [ refresh, setRefresh ] = useState(false)
  const [ specialty, setSpecialty ] = useState( getSpecialty() )
  const [ quality, setQuality ] = useState( getQuality() )
  const [ currency, setCurrency ] = useState( getCurrency(quality) )
  const handleClick = () => setRefresh(!refresh)

  useEffect(() => {
    setSpecialty(getSpecialty())
    const updateQuality = getQuality()
    setCurrency( getCurrency(updateQuality) )
    setQuality(updateQuality )
  }, [refresh])

  return (
    <Container className='DDMerchantsTraders content text-white'>
      <Row className='header-row text-center mb-3 justify-content-center w-100'>     
        <a href="https://www.dmsguild.com/product/209113/WH-Traders--Merchants-Inventories-for-30-different-types-of-merchants">
              Merchants & Traders
        </a>
        <h1 className='mb-0'>Generator</h1>
      </Row>
      <CardGroup>
        <Merchant refresh={refresh} />
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Header>
            <strong>{specialty}</strong> <br />
            ( {quality} quality )
          </Card.Header>
          <Card.Body>
            <div><strong>Currency on hand:</strong> {currency}gp</div>
          </Card.Body>
        </Card>
      </CardGroup>
      <Row className='d-grid justify-content-end'>
				<Button onClick={handleClick} type="button">Roll New Merchant</Button>
			</Row>
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