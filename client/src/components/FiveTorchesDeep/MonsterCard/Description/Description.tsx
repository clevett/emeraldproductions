import React from 'react'

import displayModifier from "../../helpers/displayModifier/displayModifier"
import { category } from '../../types/ftdTypes'

const Description = ({ title, modifier, stats }: {title: string, modifier: number, stats: category}) => {
  const { attributes, skills } = stats

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
    <span>
      <strong className='text-uppercase'>{title}</strong><br /><br />

      {attributeDisplay()}
      <strong>Modifier: </strong>{displayModifier(modifier)}<br /><br />

      {skillDisplay}
    </span>
  )
}

export default Description