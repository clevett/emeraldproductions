import { getDiceRollTotal, getRandomArrayElement } from "@/app/tools/utils";
import {
  humanoidThreats,
  monsterThreats,
  phenomenonThreats,
} from "../../../../../data/myz_threats";
import { getD66 } from "./getD66";

enum Types {
  HUMANOID = "Humanoid",
  PHENOMENON = "Phenomenon",
  MONSTER = "Monster",
}

export const getThreatCount = (rolls: number[]) =>
  rolls.filter((e: number) => e === 1).length;

const getType = (num: number) => {
  switch (num) {
    case 1:
    case 2:
      return Types.HUMANOID;
    case 6:
      return Types.PHENOMENON;
    default:
      return Types.MONSTER;
  }
};

const getThreatList = (type: `${Types}`) => {
  switch (type) {
    case Types.HUMANOID:
      return humanoidThreats;
    case Types.PHENOMENON:
      return monsterThreats;
    default:
      return phenomenonThreats;
  }
};

export const getThreat = () => {
  const roll = getDiceRollTotal();
  const d6 = roll("1d6");
  const type = getType(d6);
  const list = getThreatList(type);
  const d66 = getD66();
  const threat = list.find((e) => e.result.includes(d66));
  return threat ? threat.name : getRandomArrayElement(list).name;
};
