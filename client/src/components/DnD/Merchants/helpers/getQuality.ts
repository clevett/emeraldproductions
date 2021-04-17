import Roll from 'roll'

import qualities from "../data/qualities"

const getQuality = () => {
  const diceRoll = new Roll().roll(`1d20`).result
  const quality = qualities.find(element => diceRoll >= element.range[0] && diceRoll <= element.range[1])

  return quality?.name
}

export default getQuality