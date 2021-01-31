export interface fifthEdWeapon {
  name:string, 
  weapon_category?:string | undefined, 
  weapon_range?:string | undefined,
  [key: string]: any
}


export interface FifthEditionMonster {
  name: string,
  size: string,
  type: string,
  challenge_rating: number,
  armor_class: number,
  [key: string]: any;
}