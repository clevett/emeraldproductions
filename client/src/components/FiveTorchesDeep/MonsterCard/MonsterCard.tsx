import React, { useState } from 'react'
import { Card } from "react-bootstrap"

import { MonsterFTD } from "../types/ftdTypes"

import Abilities from "./Abilities/Abilities"
import Actions from "./Actions/Actions"
import Damage from "./Damage/Damage"
import Description from "./Description/Description"
import Gold from './Rolls/Gold'
import HitPoints from './HitPoints/HitPoints'
import SelectBuilder from "../../SelectBuilder/SelectBuilder"
import Techniques from "./Techniques/Techniques"

import categories from "../data/categories"

import displayModifier from "../helpers/displayModifier/displayModifier"

const MonsterCard = ({ monster }: {monster: MonsterFTD}) => {
  const {
    abilities,
    ac,
    actions,
    damage,
    hd,
    hp,
    immunities,
    name,
    modifiers,
    resistances,
    size,
    speed,
    type,
    vulnerabilities
  } = monster

  const monsterCategories = categories.map((category):string => category.name)
  const [category, setCategory] = useState(categories[0])

  const handleCategoryChange = (value: string) => {
    const findCategory = categories.find((element) => value === element.name)
    if (findCategory) {
      setCategory(findCategory)
    }
  }

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
        <Card.Text className="mini-cards mini-cards_3">
          <span>
            <strong>To Hit: </strong>{displayModifier(modifiers.normal)} <br />
            <Damage damage={damage} />
          </span>
          
          <span>
            <strong>AC: </strong>{ac}<br />
            <HitPoints total={hp.total} dice={hp.dice} />
          </span>

          <span>
            <strong>Base mod: </strong>{displayModifier(modifiers.normal)} <br />
            <strong>Speed: </strong>{speed}
          </span>
        </Card.Text>
        {
          immunities || resistances || vulnerabilities ? <Techniques monster={monster} /> : null
        }
        <Card.Text className="mini-cards mini-cards_2">
          <Description title="Strong" stats={category.strong} modifier={modifiers.strong} />
          <Description title="Weak" stats={category.weak} modifier={modifiers.weak} />
        </Card.Text>
        <Abilities abilities={abilities} />
        <Actions actions={actions} />
        <Gold hd={hd} />
      </Card.Body>
    </Card>
  )
}

export default MonsterCard