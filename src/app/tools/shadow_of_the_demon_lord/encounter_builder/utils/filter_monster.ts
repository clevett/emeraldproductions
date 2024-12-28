import { Monster, Filters } from "../types";

export const filterMonsters = (monsters: Monster[], filters: Filters) => {
  const { descriptor, difficulty, source } = filters;
  const newArray: Monster[] = [];

  monsters.forEach((e) => {
    if (
      (descriptor ? e.descriptor === descriptor : true) &&
      (difficulty ? e.difficulty.toString() === difficulty.toString() : true) &&
      (source ? e.source === source : true)
    ) {
      newArray.push(e);
    }
  });

  return newArray;
};
