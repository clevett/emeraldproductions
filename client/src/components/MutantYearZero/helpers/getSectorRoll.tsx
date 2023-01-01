import { getDiceRollOutput } from "../../../helpers";

export const getSectorRoll = (notation: string) => {
  const roll = getDiceRollOutput();
  const array = roll(notation);
  const artifacts = array.filter((e: number) => e === 6).length;
  const threat = array.filter((e: number) => e === 1).length;
  return {
    artifacts,
    rolls: array,
    threat,
  };
};
