import { DiceRoll } from "@dice-roller/rpg-dice-roller";
export const getDiceRollTotal = () => {
  return (notation: string) => new DiceRoll(notation).total;
};

export const getDiceRollOutput = () => {
  return (notation: string) =>
    new DiceRoll(notation).rolls.map((r) => {
      if (typeof r === "object" && "rolls" in r) {
        return r.rolls.map((e) => e.value)[0];
      }

      return undefined;
    });
};
