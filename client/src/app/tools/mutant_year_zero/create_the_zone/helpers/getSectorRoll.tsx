import { getDiceRollOutput } from "@/utils";

export const getSectorRoll = (notation: string) => {
  const roll = getDiceRollOutput();
  return roll(notation);
};
