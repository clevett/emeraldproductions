import { MonsterMath } from '../types/types'

interface modifiers {
  normal: number,
  weak: number,
  strong: number
}

const determineModifiers = (hd:number, monsterMath: MonsterMath | undefined):modifiers => {
  const modifier = Math.round(hd + 2) > 10 ? 10 : Math.round(hd + 2)

  const normal = monsterMath ? monsterMath.normal : modifier
  const weak = monsterMath ? monsterMath.weak : modifier
  const strong = monsterMath ? monsterMath.strong : modifier

  return {
    normal,
    weak,
    strong
  }
}

export default determineModifiers