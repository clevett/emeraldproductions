import { getDiceRollTotal } from "@/app/tools/utils";

export const getD66 = () => {
  const roll = getDiceRollTotal();
  return parseInt(`${roll("1d6")}${roll("1d6")}`);
};
