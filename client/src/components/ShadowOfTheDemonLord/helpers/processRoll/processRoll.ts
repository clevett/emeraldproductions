import getRolls from "../getRolls/getRolls";
import Coins from "../Coins";
import { CoinRolls } from "../generateCoinList/generateCoinList";

export const processRoll = (rollFormulas: CoinRolls, limit: number) => {
  const results = getRolls(rollFormulas);
  const coins = new Coins(limit);
  return coins.handleRoll(results);
};
