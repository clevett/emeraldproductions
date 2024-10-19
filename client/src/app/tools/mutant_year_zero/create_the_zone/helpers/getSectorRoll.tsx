import { getDiceRollOutput } from "@/app/tools/utils";

export const getSectorRoll = (notation: string) => {
  const roll = getDiceRollOutput();
  return roll(notation);
};
