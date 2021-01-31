import math from '../data/monsterMath'
import { MonsterMath } from "../types/ftdTypes"

const findMonsterMath = ( hd: number ):MonsterMath | undefined => {
  const monsterMath = math.find((element: MonsterMath) => element["hd"] === hd)
  return monsterMath ? monsterMath : math[0]
}

export default findMonsterMath