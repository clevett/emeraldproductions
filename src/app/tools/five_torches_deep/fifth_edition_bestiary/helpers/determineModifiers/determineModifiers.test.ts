import determineModifiers from "./determineModifiers";
import { ftdMonsters } from "../../../../data/ftdMonsters";

describe("Given determineModifirs is called", () => {
  describe("when passed hd and monsterMath Object", () => {
    const example = ftdMonsters[2];
    const { normal, weak, strong } = example;

    const result = determineModifiers(1, example);

    const expected = {
      normal,
      weak,
      strong,
    };

    it("then returns an object of modifiers", () => {
      expect(result).toEqual(expected);
    });
  });
});
