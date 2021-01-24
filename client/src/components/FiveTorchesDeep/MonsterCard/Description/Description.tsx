import React from 'react'
import { Card } from "react-bootstrap"

import displayModifier from "../../helpers/displayModifier"
import { category } from '../../types/types'

const Description = ({ title, modifier, category }: {title: string, modifier: number, category: category}) => {
  const { attributes, skills } = category

  const skillDisplay = skills.length ? `${skills.join(', ')}` : ''

  const attributeDisplay = () => {
    if (attributes.length) {
      const display = `${attributes.join('/')}`
      return (
        <span>
          <strong>{display}: </strong>{displayModifier(modifier)} <br />
        </span>
      )
    }
  }

  return (
    <Card.Text>
      <strong className='text-uppercase'>{title}</strong><br /><br />

      {attributeDisplay()}
      <strong>Modifier: </strong>{displayModifier(modifier)}<br /><br />

      {skillDisplay}
    </Card.Text>
  )
}

export default Description