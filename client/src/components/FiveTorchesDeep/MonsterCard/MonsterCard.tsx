import React, { useState } from 'react'
import { Card } from "react-bootstrap"

import { MonsterFTD } from "../types/ftdTypes"

import Abilities from "./Abilities/Abilities"
import Actions from "./Actions/Actions"
import Description from "./Description/Description"
import Gold from './Rolls/Gold'
import SelectBuilder from "../../SelectBuilder/SelectBuilder"

import categories from "../data/categories"

import displayModifier from "../helpers/displayModifier/displayModifier"

const MonsterCard = ({ monster }: {monster: MonsterFTD}) => {
  const {
    abilities,
    ac,
    //attack,
    actions,
    damage,
    hd,
    hp,
    name,
    modifiers, 
    size,
    speed,
    type,
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
            <strong>Damage: </strong>{damage} <br /><br />

          </span>

          <span>
            <strong>AC: </strong>{ac}<br />
            <strong>HP: </strong>{hp}<br /><br />
          </span>

          <span>
            <strong>Base mod: </strong>{displayModifier(modifiers.normal)} <br />
            <strong>Speed: </strong>{speed}
          </span>
        </Card.Text>
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