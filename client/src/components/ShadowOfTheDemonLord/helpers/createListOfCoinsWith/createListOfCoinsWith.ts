import { CoinValue } from "../Coins";
import { getProperCoinName } from "../getProperCoinName/getProperCoinName";

export const createListOfCoins = (treasure: CoinValue) => {
  let string = "";

  for (const [key, value] of Object.entries(treasure)) {
    const longName = getProperCoinName(key);
    const name = value > 1 ? `${longName}s` : longName;
    string += value ? ` ${value} ${name},` : "";
  }

  return string.slice(0, -1);
};
