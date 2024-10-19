import { FifthEditionEquipment } from "@/app/data/5eEquipment";
import { fifthEdWeapon, ftdWeapon } from "@/app/tools/five_torches_deep/types";

const weaponFactory = (weapon: fifthEdWeapon): ftdWeapon => {
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
