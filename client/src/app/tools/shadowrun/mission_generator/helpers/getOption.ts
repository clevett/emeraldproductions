import { Options, Option, mission } from "@/app/data";
import { getDiceRollTotal } from "@/app/tools/utils";

export const getOption = (item: Option) => {
  const roll = getDiceRollTotal();
  const dice = item === Options.EMPLOYER ? "2d6" : "1d6";

  const options = mission.filter((m) => m.table === item);
  const findResult = (r: number) => options.find((e) => e.result.includes(r));
  const result = findResult(roll(dice));

  return result;
};
