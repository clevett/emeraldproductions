import Roll from 'roll'
import { FifthEditionMonster, MonsterFTD } from "../types/types"

const convertFifthMonstersToFTD = (monster: FifthEditionMonster): MonsterFTD => {
  const {
    armor_class,
    name, 
    size, 
    type, 
    challenge_rating 
  } = monster

  const modifier = Math.round(challenge_rating + 2) > 10 ? 10 : Math.round(challenge_rating + 2)

  const diceRoll = ( quanity: number ): number => new Roll().roll(`${quanity}d8`).result
  const hp = challenge_rating < 1 ? diceRoll(1) : diceRoll(challenge_rating)

  return {
    name,
    size,
    type,
    hd: challenge_rating,
    modifier,
    ac: armor_class,
    hp,
  }
}

export default convertFifthMonstersToFTD