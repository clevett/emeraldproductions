import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { CoinRolls } from "../generateCoinList/generateCoinList";

const getRolls = (formulas: CoinRolls) => {
  const diceRoll = (notation: string): number => new DiceRoll(notation).total;
  const results: { name: string; result: number }[] = [];

  for (const [key, value] of Object.entries(formulas)) {
    if (value) {
      const roll = diceRoll(value);
      results.push({ name: key, result: roll });
    }
  }

  return results;
};

export default getRolls;
