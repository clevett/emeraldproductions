import { DiceRoll } from "@dice-roller/rpg-dice-roller";
export const getDiceRollTotal = () => {
  return (notation: string) => new DiceRoll(notation).total;
};

export const getDiceRollOutput = () => {
  return (notation: string) =>
    //@ts-expect-error
    new DiceRoll(notation).rolls.map((r) => r.rolls.map((e) => e.value))[0];
};
