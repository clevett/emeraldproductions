import Roll from 'roll'
import { MonsterMath } from "../types/types"

export const challengeCheck = (hd: number):number => hd < 1 ? 1 : hd

export const rollD8s = ( quanity: number ): number => new Roll().roll(`${quanity}d8`).result

export const convertHP = ( hd: number, hpObject:MonsterMath | undefined ) => {
  const hpTotal = hpObject ? `${hpObject.hp}` : `${rollD8s(challengeCheck(hd))}`

  return `${hpTotal} (${challengeCheck(hd)}d8)`
}

export default convertHP