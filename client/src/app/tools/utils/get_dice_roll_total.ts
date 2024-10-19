import { DiceRoll } from "@dice-roller/rpg-dice-roller";
export const getDiceRollTotal = () => {
  return (notation: string) => new DiceRoll(notation).total;
};
