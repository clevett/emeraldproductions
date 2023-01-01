import { getDiceRollTotal } from "../../../helpers";

export const getD66 = () => {
  const roll = getDiceRollTotal();
  return parseInt(`${roll("1d6")}${roll("1d6")}`);
};
