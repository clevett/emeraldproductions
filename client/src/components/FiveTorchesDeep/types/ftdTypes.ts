
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
<<<<<<< HEAD
=======
>>>>>>> 49bc64b96adc2357f5a2dbbd842dd9ca47aa3966
export interface hp {
  total: number,
  dice: string
}

<<<<<<< HEAD
=======
>>>>>>> master
=======
>>>>>>> 49bc64b96adc2357f5a2dbbd842dd9ca47aa3966
export interface MonsterFTD {
  abilities: ability[] | null,
  name: string,
  size: string,
  type: string,
  hd: number,
  ac: number,
<<<<<<< HEAD
<<<<<<< HEAD
  hp: hp,
=======
  hp: string,
>>>>>>> master
=======
  hp: hp,
>>>>>>> 49bc64b96adc2357f5a2dbbd842dd9ca47aa3966
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