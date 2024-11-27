import { createListOfCoins } from "./createListOfCoinsWith/createListOfCoinsWith";
import { generateCoinList } from "./generateCoinList/generateCoinList";

interface rolls {
  bit: null | string;
  cp: null | string;
  ss: null | string;
  gc: null | string;
}

export const buildResultString = (goldTotal: number, rollFormulas: rolls) => {
  const rewards = generateCoinList(goldTotal, rollFormulas);
  return createListOfCoins(rewards);
};
