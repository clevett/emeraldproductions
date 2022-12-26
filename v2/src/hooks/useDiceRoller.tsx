import { DiceRoll } from "@dice-roller/rpg-dice-roller";
export const useDiceRoller = () => {
  return (notation: string) => new DiceRoll(notation).total;
};
