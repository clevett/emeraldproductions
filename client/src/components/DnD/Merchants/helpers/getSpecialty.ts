import Roll from 'roll'

import specialties from "../data/specialties"

const getSpecialty = () => {
  const diceRoll = new Roll().roll(`1d100`).result
  const specialty = specialties.find(element => diceRoll >= element.range[0] && diceRoll <= element.range[1])

  return specialty?.name
}

export default getSpecialty