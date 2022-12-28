import { processRoll } from "./processRoll";

describe("Given processRoll is called", () => {
  describe("when passed the total and roll forumlas", () => {
    const rollFormulas = { bit: "2d6", cp: "2d6", ss: "6d6", gc: "3d6" };
    const total = 5;

    it("then returns an object with coin values", () => {
      const result = processRoll(rollFormulas, total);
      expect(result).toHaveProperty("coins");
      expect(result).toHaveProperty("total");
    });
  });
});
