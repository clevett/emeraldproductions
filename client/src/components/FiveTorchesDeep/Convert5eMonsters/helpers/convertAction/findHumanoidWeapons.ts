import equipment from "../../data/equipment"
import { fifthEdWeapon } from "../../../types/fifthEditionTypes"
import { ftdWeapon } from "../../../types/ftdTypes"

const weaponFactory = (weapon:fifthEdWeapon):ftdWeapon => {
  const { name, weapon_category, weapon_range } = weapon
  return { name, "category": weapon_category, "range": weapon_range }
}

const findHumanoidWeapons = (): ftdWeapon[] => {
  const filteredWeapons = equipment.filter(gear => gear.equipment_category.name === "Weapon")
  return filteredWeapons.map(weapon => weaponFactory(weapon))
}

export default findHumanoidWeapons