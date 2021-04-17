import React, { useState, useEffect } from "react"
import { Card } from "react-bootstrap"

import randomElement from "./helpers/randomElement"
import randomName from "./helpers/randomName"

import shop from "./shop.svg"

import { 
  appearances, 
  personalities, 
  flaws, 
  bonds, 
  ideals,
} from '../data/characteristics'

const Merchant = ( { refresh = false } ) => {
  const [ appearance, setAppearence ] = useState( randomElement( appearances ) )
  const [ personality, setPersonality ] = useState( randomElement( personalities ) )
  const [ flaw, setFlaw ] = useState( randomElement( flaws ) )
  const [ bond, setBond ] = useState( randomElement( bonds ) )
  const [ ideal, setIdeal ] = useState( randomElement( ideals ) )

  let { race, name, sex } = randomName()
  const [ merchantName, setName ] = useState( sex )
  const [ merchantSex, setSex ] = useState( name )
  const [ merchantRace, setRace ] = useState( race )

  useEffect(() => {
    setAppearence( randomElement( appearances ) )
    setPersonality( randomElement( personalities ) )
    setFlaw( randomElement( flaws ) )
    setBond( randomElement( bonds ) )
    setIdeal( randomElement( ideals ) )

    let { race, name, sex } = randomName()
    setName(name)
    setRace(race)

    if (sex) {
      setSex( sex )
    }
  }, [ refresh ])

  return (
    <Card>
      <Card.Img variant="top" src={shop} />
      <Card.Header>
        <strong>{merchantName}</strong><br />
        {merchantRace}, {appearance}
      </Card.Header>
      <Card.Body>
        <div><strong>Bond:</strong> {bond}</div><br />
        <div><strong>Flaw:</strong> {flaw}</div><br />
        <div><strong>Idea:</strong> {ideal}</div><br />
        <div><strong>Personality:</strong> {personality}</div>
      </Card.Body>
    </Card>
  )
}

export default Merchant