
export interface FifthEditionMonster {
  name: string,
  size: string,
  type: string,
  challenge_rating: number,
  armor_class: number,
  attack_bonus: number | undefined,
}

export interface MonsterFTD {
  name: string,
  size: string,
  type: string,
  hd: number,
  modifier: number,
  ac: number,
  hp: number,
  attack: number,
}
