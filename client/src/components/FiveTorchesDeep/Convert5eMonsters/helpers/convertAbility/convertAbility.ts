import { ability } from "../../../types/ftdTypes"

import { convertDesc } from "../convertText"

const convertAbility = (abilites:ability[]) => {
    
  return  abilites.map(({ name, desc }: ability) => ( { name, desc: convertDesc(desc) } ))
}

export default convertAbility