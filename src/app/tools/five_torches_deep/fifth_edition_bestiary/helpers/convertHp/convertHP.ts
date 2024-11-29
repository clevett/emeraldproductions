import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { MonsterMath } from "../../types/ftd";

import challengeCheck from "../challengeCheck/challengeCheck";

export const rollD8s = (q: number): number => new DiceRoll(`${q}d8`).total;

export const convertHP = (hd: number, hpObject: MonsterMath | undefined) => {
  const total = hpObject ? hpObject.hp : rollD8s(challengeCheck(hd));
  const dice = `${challengeCheck(hd)}d8`;

  return {
    total,
    dice,
  };
};

export default convertHP;
