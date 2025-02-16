import { DiceRoll } from "@dice-roller/rpg-dice-roller";
export const getDiceRoll = () => {
  return (notation: string) => new DiceRoll(notation);
};
