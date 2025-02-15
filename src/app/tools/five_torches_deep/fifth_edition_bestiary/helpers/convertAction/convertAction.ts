import { action } from "../../types/ftd";

import findHumanoidWeapons from "./findHumanoidWeapons";

import { convertDesc } from "../convertText";

const removeHumanoidWeapons = (actions: action[]) => {
  const weaponNames = findHumanoidWeapons().map((weapon) => weapon.name);
  return actions.filter((action) => !weaponNames.includes(action.name));
};

const removeNaturalWeapons = (actions: action[]) => {
  const weaponNames = [
    "Beak",
    "Bite",
    "Claw",
    "Claws",
    "Fist",
    "Gore",
    "Hooves",
    "Ram",
    "Rock",
  ];
  return actions.filter((action) => !weaponNames.includes(action.name));
};

const multiAttack = (hd: number) =>
  `${Math.max(Math.floor(hd / 3), 1)} extra attacks`;

const ifTargetCreature = "If the target is a creature,";

const forceCondition = (desc: string): string => {
  const splitPhrase = desc.split(ifTargetCreature)[1];
  return `${ifTargetCreature} ${splitPhrase}`;
};

const breathToBlast = (hd: number): string => {
  const hdDivideBy2 = Math.max(Math.floor(hd / 2), 1);
  const hdDivideBy3 = Math.max(Math.floor(hd / 3), 1);
  const areaSize = hdDivideBy2 > 0 ? hdDivideBy2 * 10 : 10;
  const damage = hdDivideBy2 > 0 ? hdDivideBy2 : 1;
  return `${areaSize}' cone, ${damage}d6 damage, ${hdDivideBy3} user per fight, PCs check to resist or dodge`;
};

const convertAction = (hd: number, actions: action[]) => {
  actions = removeHumanoidWeapons(actions);
  actions = removeNaturalWeapons(actions);

  return actions.map((monsterAction: action) => {
    let { name, desc } = monsterAction;

    if (name === "Multiattack") {
      name = "Multi-attack";
      desc = multiAttack(hd);
    } else if (desc.includes(ifTargetCreature)) {
      desc = forceCondition(desc);
    } else if (name.includes("Breath")) {
      desc = breathToBlast(hd);
    } else {
      desc = convertDesc(desc);
    }

    return { name, desc };
  });
};

export default convertAction;
