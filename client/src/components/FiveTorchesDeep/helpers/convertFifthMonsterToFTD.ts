import { FifthEditionMonster, MonsterFTD } from "../types/types"

import convertHp from "./convertHP"
import convertSpeed from './convertSpeed'
import findMonsterMath from "./findMonsterMath"
import determineModifiers from './determineModifiers'

const convertFifthMonstersToFTD = (monster: FifthEditionMonster): MonsterFTD => {
  const {
    armor_class,
    challenge_rating,
    name, 
    size,
    type,
  } = monster

  const attack = monster.attack_bonus ? monster.attack_bonus : 0

  const monsterMath = findMonsterMath(challenge_rating)
  
  const damage = monsterMath ? monsterMath.damage : ""
  const hp = convertHp(challenge_rating, monsterMath)

  const modifiers = determineModifiers(challenge_rating, monsterMath)

  const speed = monster.speed ? convertSpeed(monster.speed) : undefined

  return {
    ac: armor_class,
    attack,
    damage,
    hd: challenge_rating,
    hp,
    name,
    modifiers,
    size,
    speed,
    type,
  }
}

export default convertFifthMonstersToFTD