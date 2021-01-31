import React from 'react'
import { Card } from "react-bootstrap"

import { MonsterFTD } from "../../types/ftdTypes"

const Techniques = ({ monster }: {monster: MonsterFTD}) => {
  const { immunities, resistances, vulnerabilities } = monster

  return (
    <Card.Text>
      <strong className='text-uppercase'>Techniques</strong> <br />
      {
        immunities ? <span>Immunities: {immunities} <br /> </span>: null
      }
      {
        resistances ? <span>Resistances: {resistances} <br /> </span> : null
      }
      {
        vulnerabilities ? <span>Vulnerabilties: {vulnerabilities} <br /> </span> : null
      }
    </Card.Text> 
  )
}

export default Techniques