import React from 'react'

import { ability } from '../../../types/ftdTypes'

const Ability = ( { name, desc }: ability) => {
  desc = desc.includes("saving throw") ? desc.replace(/saving throw/g, "check") : desc

  return(
    <span>
      <strong><em>{name}. </em></strong> 
      {desc}
      <br />
    </span>
  )
}

export default Ability