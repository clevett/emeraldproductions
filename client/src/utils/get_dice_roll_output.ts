import { DiceRoll } from "@dice-roller/rpg-dice-roller";
export const getDiceRollOutput = () => {
  return (notation: string) =>
    //@ts-expect-error types are not correct
    new DiceRoll(notation).rolls.map((r) => r.rolls.map((e) => e.value))[0];
};
