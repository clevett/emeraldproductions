import { getProperCoinName } from "./getProperCoinName";

describe("Given getProperCoinName is called", () => {
  describe("when the default case is triggered", () => {
    it("then returns an empty string", () => {
      expect(getProperCoinName("gem")).toBe("");
    });
  });

  describe("when bit is passed", () => {
    it("then returns bit", () => {
      expect(getProperCoinName("bit")).toBe("bit");
    });
  });

  describe("when copper is passed", () => {
    it("then passes back copper piece", () => {
      expect(getProperCoinName("copper")).toBe("copper piece");
    });
  });

  describe("when silver is passed", () => {
    it("then gets silver shilling", () => {
      expect(getProperCoinName("silver")).toBe("silver shilling");
    });
  });

  describe("when gold is passed", () => {
    it("then returns gold crown", () => {
      expect(getProperCoinName("gold")).toBe("gold crown");
    });
  });
});
