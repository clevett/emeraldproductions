
export interface FifthEditionMonster {
  name: string,
  size: string,
  type: string,
  challenge_rating: number,
  armor_class: number,
  [key: string]: any;
}
export interface MonsterMath {
  hd: number,
  hp: number,
  weak: number,
  normal: number,
  strong: number,
  damage: string,
}

export interface MonsterFTD {
  name: string,
  size: string,
  type: string,
  hd: number,
  ac: number,
  hp: string,
  attack: number,
  damage: string,
  modifiers: {
    normal: number,
    weak: number,
    strong: number,
  },
  speed: string | undefined
}