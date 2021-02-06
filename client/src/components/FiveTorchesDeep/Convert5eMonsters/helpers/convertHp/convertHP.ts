import Roll from 'roll'
import { MonsterMath } from "../../../types/ftdTypes"

import challengeCheck from "../challengeCheck/challengeCheck"

export const rollD8s = ( quanity: number ): number => new Roll().roll(`${quanity}d8`).result

export const convertHP = ( hd: number, hpObject:MonsterMath | undefined ) => {
  const total = hpObject ? hpObject.hp : rollD8s(challengeCheck(hd))
  const dice = `${challengeCheck(hd)}d8`

  return {
    total,
    dice
  }
}

export default convertHP