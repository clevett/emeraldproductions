
export interface MonsterMath {
  hd: number,
  hp: number,
  weak: number,
  normal: number,
  strong: number,
  damage: string,
}

export interface category {
  attributes: string[] | [],
  skills: string[] | []
}

export interface MonsterCategories   {
  name: string,
  weak: category,
  strong: category
}

export interface ability {
  name: string,
  desc: string
}

export interface action {
  name: string,
  desc: string,
}

<<<<<<< HEAD
export interface hp {
  total: number,
  dice: string
}

=======
>>>>>>> master
export interface MonsterFTD {
  abilities: ability[] | null,
  name: string,
  size: string,
  type: string,
  hd: number,
  ac: number,
<<<<<<< HEAD
  hp: hp,
=======
  hp: string,
>>>>>>> master
  immunities: string | null,
  actions: action[] | null, 
  attack: number,
  damage: string,
  modifiers: {
    normal: number,
    weak: number,
    strong: number,
  },
  resistances: string | null,
  speed: string | null,
  vulnerabilities: string | null
}

export interface ftdWeapon {
  name:string, 
  category:string | undefined, 
  range:string | undefined
}