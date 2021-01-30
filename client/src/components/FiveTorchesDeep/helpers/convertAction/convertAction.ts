import { action } from "../../types/ftdTypes"

import findHumanoidWeapons from "./findHumanoidWeapons"

import { convertDesc } from "../convertText"

const removeHumanoidWeapons = (actions:action[]) => {
  const weaponNames = findHumanoidWeapons().map(weapon => weapon.name)
  return actions.filter(action => !weaponNames.includes(action.name))
}

const simpleConversions = (hd: number, {name, desc}: action):string => {
  switch(name) {
    case "Multiattack":
      const attacks = Math.floor(hd / 3)
      return `${attacks} extra attacks`
    default:
      return convertDesc(desc)
  }
}

const complexConversions = (desc:string):string => {
  const ifTargetCreature = 'If the target is a creature,'

  if (desc.includes(ifTargetCreature)) {
    const splitPhrase = desc.split(ifTargetCreature)[1]
    return `${ifTargetCreature} ${splitPhrase}`
  } else {
    return desc
  }
}

const convertAction = (hd:number, actions: action[]):any[] => {
  actions = removeHumanoidWeapons(actions)

  return actions.map((monsterAction: action) => {
    const { name } = monsterAction
    let { desc } = monsterAction
    desc = simpleConversions(hd, { name, desc })
    desc = complexConversions(desc)
    return { name, desc }
  })
}

export default convertAction