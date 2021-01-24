import React, { useState } from 'react'
import { Card } from "react-bootstrap"

import { MonsterFTD } from "../types/types"

import Description from "./Description/Description"
import SelectBuilder from "../../SelectBuilder/SelectBuilder"

import categories from "../data/categories"

import displayModifier from "../helpers/displayModifier"

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
        <Card.Text>
          <strong>To Hit: </strong>{attack} <br />
          <strong>Damage: </strong>{damage} <br /><br />

          <strong>AC: </strong>{ac}<br />
          <strong>HP: </strong>{hp}<br /><br />

          <strong>Base mod: </strong>{displayModifier(modifiers.normal)} <br />
          <strong>Speed: </strong>{speed}
        </Card.Text>
        <Description title="Strong" category={category.strong} modifier={modifiers.strong} />
        <Card.Text>
          <strong className='text-uppercase'>Techniques</strong>
        </Card.Text>
        <Description title="Weak" category={category.weak} modifier={modifiers.weak} />
      </Card.Body>
    </Card>
  )
}

export default MonsterCard