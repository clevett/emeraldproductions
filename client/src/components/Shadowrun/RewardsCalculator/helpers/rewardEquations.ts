import { Run, RunType } from "../data/srRewards";

export const getDicePoolKarma = (dice: number) => Math.floor(dice / 6);

export const getDicePoolNuyen = (dice: number) => Math.floor(dice / 4);

export const getCostModifier = (type: Run, num: number) => {
  const decimal = num / 100;
  switch (type) {
    case RunType.COLD:
      return decimal;
    case RunType.GOOD:
      return -decimal;
    default:
      return 0;
  }
};
