import Roll from 'roll'
import { MonsterMath } from "../../types/ftdTypes"

import challengeCheck from "../challengeCheck/challengeCheck"

export const rollD8s = ( quanity: number ): number => new Roll().roll(`${quanity}d8`).result

export const convertHP = ( hd: number, hpObject:MonsterMath | undefined ) => {
<<<<<<< HEAD
  const total = hpObject ? hpObject.hp : rollD8s(challengeCheck(hd))
  const dice = `${challengeCheck(hd)}d8`

  return {
    total,
    dice
  }
=======
  const hpTotal = hpObject ? `${hpObject.hp}` : `${rollD8s(challengeCheck(hd))}`

  return `${hpTotal} (${challengeCheck(hd)}d8)`
>>>>>>> master
}

export default convertHP