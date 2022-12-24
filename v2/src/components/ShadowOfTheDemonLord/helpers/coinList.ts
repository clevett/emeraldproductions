import Coins from "../helpers/Coins";

export const coinList = (total: number) => {
  const treasure = new Coins(null);

  const goldRoundedDown = Math.floor(total);
  const gold = goldRoundedDown > 0 ? goldRoundedDown : 0;

  const remainder = treasure.getRemainder(total);
  const remainingCoins = remainder
    ? treasure.convertToCoins(remainder)
    : { silver: 0, copper: 0 };
  const { silver, copper } = remainingCoins;

  let string = ``;
  string += gold ? `${gold} gold` : "";
  string += gold && silver ? ", " : "";
  string += silver ? `${silver} silver` : "";
  string += silver && copper ? ", " : "";
  string += copper ? `${copper} copper` : "";

  return string;
};
