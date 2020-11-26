import React from 'react'

import danger from './danger'
import DangerColumn from '../DangerColumn/DangerColumn'

const EncounterDanger = ({ selected }) => {
  const dangerObject = danger[selected.toLowerCase()]
  const dangerKeys = Object.keys(dangerObject)
  
  const renderedList = dangerKeys.map(key => <DangerColumn key={key} header={key} range={dangerObject[key]} />)

  return renderedList
}

export default EncounterDanger