
import { FifthEditionMonster, MonsterFTD } from "../types/types"

const convertFifthMonstersToFTD = (monster: FifthEditionMonster): MonsterFTD => {
  const { name, size, type, challenge_rating } = monster

  return {
    name,
    size,
    type,
    hd: challenge_rating
  }
}

export default convertFifthMonstersToFTD