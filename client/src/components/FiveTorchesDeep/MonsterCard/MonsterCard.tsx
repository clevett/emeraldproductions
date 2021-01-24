import React from 'react'
import { Card } from "react-bootstrap"

import { MonsterFTD } from "../types/types"

import SelectBuilder from "../../SelectBuilder/SelectBuilder"

const MonsterCard = ({ monster }: {monster: MonsterFTD}) => {
  const { 
    ac,
    attack,
    damage,
    hd,
    hp,
    name,
    modifiers, 
    size,
    speed,
    type,
  } = monster

  const monsterCategories = ['Brute', "Leader", "Predator", "Shaper", "Sniper", "Soldier"]

  const handleCategoryChange = (category: string) => {
    console.log(category)
  }

  const displayModifier = (modifier: number):string => modifier > 0 ? `+${modifier}` : `${modifier}`

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h3>{name}</h3>,
          <span> {hd} HD</span>
          <SelectBuilder 
            label="Select monster catagory"
            onSelectValueChange={handleCategoryChange} 
            options={monsterCategories}
            selected={monsterCategories[0]}
          />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{size}, {type}</Card.Subtitle>
        <Card.Text>
          <p>
            <strong>To Hit: </strong>{attack} <br />
            <strong>Damage: </strong>{damage}
          </p>
          <p>
            <strong>AC: </strong>{ac} <br />
            <strong>HP: </strong>{hp}
          </p>
          <p>
            <strong>Base mod: </strong>{displayModifier(modifiers.normal)} <br />
            <strong>Speed: </strong>{speed}
          </p>
          
          <hr />

          <h4>Strong</h4>
          <p>
            <strong>Int: </strong>{displayModifier(modifiers.strong)} <br />
            <strong>Stealth: </strong>{displayModifier(modifiers.strong)}
          </p>
          <p>
            Patient, cunning, stealthy, aboreal...
          </p>

          <hr />

          <h4>Techniques</h4>

          <hr />

          <h4>Weak</h4>
          <p>
            <strong>Con: </strong>{displayModifier(modifiers.weak)} <br />
            <strong>Morale: </strong>{displayModifier(modifiers.weak)}
          </p>
          <p>
            Fearful, quick to run and hide...
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MonsterCard