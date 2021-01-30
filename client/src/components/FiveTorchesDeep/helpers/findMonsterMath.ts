import math from '../data/monsterMath'
import { MonsterMath } from "../types/ftdTypes"

const findMonsterMath = ( hd: number ):MonsterMath | undefined => {
  return math.find((element: MonsterMath) => element["hd"] === hd)
}

export default findMonsterMath