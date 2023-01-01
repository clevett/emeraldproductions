import { getDiceRollOutput } from "../../../helpers";

export const getSectorRoll = (notation: string) => {
  const roll = getDiceRollOutput();
  return roll(notation);
};
