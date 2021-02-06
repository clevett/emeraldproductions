import Roll from 'roll'
import { MonsterMath } from "../../types/ftdTypes"

import challengeCheck from "../challengeCheck/challengeCheck"

export const rollD8s = ( quanity: number ): number => new Roll().roll(`${quanity}d8`).result

export const convertHP = ( hd: number, hpObject:MonsterMath | undefined ) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 49bc64b96adc2357f5a2dbbd842dd9ca47aa3966
  const total = hpObject ? hpObject.hp : rollD8s(challengeCheck(hd))
  const dice = `${challengeCheck(hd)}d8`

  return {
    total,
    dice
  }
<<<<<<< HEAD
=======
  const hpTotal = hpObject ? `${hpObject.hp}` : `${rollD8s(challengeCheck(hd))}`

  return `${hpTotal} (${challengeCheck(hd)}d8)`
>>>>>>> master
=======
>>>>>>> 49bc64b96adc2357f5a2dbbd842dd9ca47aa3966
}

export default convertHP