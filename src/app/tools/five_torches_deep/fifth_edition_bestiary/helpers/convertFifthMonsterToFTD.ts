import { FifthEditionMonster } from "../types/fifth_edition";

import convertAbility from "./convertAbility/convertAbility";
import convertAction from "./convertAction/convertAction";
import convertHp from "./convertHp/convertHP";
import convertSpeed from "./convertSpeed/convertSpeed";
import findMonsterMath from "./findMonsterMath";
import determineModifiers from "./determineModifiers/determineModifiers";

const convertFifthMonstersToFTD = (monster: FifthEditionMonster) => {
  const {
    actions,
    armor_class,
    challenge_rating,
    condition_immunities,
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
    name,
    size,
    special_abilities,
    type,
  } = monster;

  const joinArrayIntoList = (array: string[]): string => array.join(", ");

  const abilities = special_abilities
    ? convertAbility(special_abilities)
    : null;

  const actionsList = actions ? convertAction(challenge_rating, actions) : null;

  const attack = monster.attack_bonus ? monster.attack_bonus : 0;

  const conditionsImmunities = condition_immunities.map(
    (condition: { name: string }) => condition.name.toLowerCase()
  );
  const immunitiesArray = [
    ...conditionsImmunities,
    joinArrayIntoList(damage_immunities),
  ];
  const immunities = immunitiesArray
    ? joinArrayIntoList(immunitiesArray)
    : null;

  const monsterMath = findMonsterMath(challenge_rating);

  const damage = monsterMath ? monsterMath.damage : "";
  const hp = convertHp(challenge_rating, monsterMath);

  const modifiers = determineModifiers(challenge_rating, monsterMath);

  const resistances = damage_resistances
    ? joinArrayIntoList(damage_resistances)
    : null;

  const speed = monster.speed ? convertSpeed(monster.speed) : null;

  const vulnerabilities = damage_vulnerabilities
    ? joinArrayIntoList(damage_vulnerabilities)
    : null;

  return {
    actions: actionsList,
    abilities,
    ac: armor_class,
    attack,
    damage,
    hd: challenge_rating,
    hp,
    immunities,
    name,
    modifiers,
    resistances,
    size,
    speed,
    type,
    vulnerabilities,
  };
};

export default convertFifthMonstersToFTD;
