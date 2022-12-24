import { processRoll } from "../processRoll/processRoll";
import Coins from "../Coins";

export interface CoinRolls {
  bit?: null | string;
  cp?: null | string;
  ss?: null | string;
  gc?: null | string;
}

export const generateCoinList = (limit: number, rollFormulas: CoinRolls) => {
  const treasure = new Coins(limit);
  let total = limit;
  let loop = true;
  let loopNumber = 0;

  do {
    const loot = processRoll(rollFormulas, limit);
    if (loot.total > 0) {
      loot.coins.forEach(({ name, value }) => {
        const convertedToGold = value / treasure.goldDivisor(name);
        const difference = total - convertedToGold;

        if (difference > 0) {
          treasure.addAllCoins({ [`${name}`]: value });
          total -= convertedToGold;
        }
      });

      //Break out of the loop if rolls can't subtract any more
      loopNumber > 50 ? (loop = false) : loopNumber++;
    } else {
      loop = false;
    }
  } while (loop);

  const goldRoundedDown = Math.floor(total);
  const gold = goldRoundedDown > 0 ? goldRoundedDown : 0;

  const remainder = treasure.getRemainder(total);
  const remainingCoins = remainder ? treasure.convertToCoins(remainder) : {};

  treasure.addAllCoins({ ...remainingCoins, gold });

  return treasure.getAllCoins();
};
