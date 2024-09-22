import { getDiceRollOutput } from "../../../../helpers";

export const getSectorRoll = (notation: string): number[] => {
  const roll = getDiceRollOutput();
  return roll(notation);
};
