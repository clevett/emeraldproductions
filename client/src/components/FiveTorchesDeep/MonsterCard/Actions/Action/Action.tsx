import React from "react"

import { action } from '../../../types/ftdTypes'

const Action = ( { name, desc }: action) => {
  return(
    <span>
      <strong><em>{name}. </em></strong> 
      {desc}
      <br />
    </span>
  )
}

export default Action