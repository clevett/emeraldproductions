import { Run, RunType } from "@/data";

export const getCostModifier = (type: Run, num: number = 10) => {
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
