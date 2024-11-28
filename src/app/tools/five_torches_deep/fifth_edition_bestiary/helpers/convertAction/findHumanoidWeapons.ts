import { FifthEditionEquipment } from "@/data/5eEquipment";
import {
  FifthEdWeapon,
  ftdWeapon,
} from "@/app/tools/five_torches_deep/fifth_edition_bestiary/types";

const weaponFactory = (weapon: FifthEdWeapon): ftdWeapon => {
  const { name, weapon_category, weapon_range } = weapon;
  return { name, category: weapon_category, range: weapon_range };
};

const findHumanoidWeapons = (): ftdWeapon[] => {
  const filteredWeapons = FifthEditionEquipment.filter(
    (gear) => gear.equipment_category.name === "Weapon"
  );
  return filteredWeapons.map((weapon) => weaponFactory(weapon));
};

export default findHumanoidWeapons;
