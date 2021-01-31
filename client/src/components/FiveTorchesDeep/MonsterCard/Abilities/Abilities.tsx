import React from "react"

import { Card } from "react-bootstrap"

import Ability from "./Ability/Ability"
import { ability } from "../../types/ftdTypes"

const Abilities = ({ abilities }: {abilities: ability[] | null }) => {
  const mapAbilities = () => {
    if (abilities) {
      return abilities.map(({ name, desc }: ability, index:number) => <Ability key={`${name}-${index}`} name={name} desc={desc} />)
    }
  }

  if (abilities && abilities.length > 0) {
    return (
      <Card.Text>
        <strong className='text-uppercase'>Special Abilities</strong><br />
        { mapAbilities() }
      </Card.Text>
    )
  } else {
    return null
  }
}

export default Abilities