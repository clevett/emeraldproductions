import { createListOfCoins } from "./createListOfCoinsWith";

describe("Given createListOfCoins is called", () => {
  const coins = { bit: 0, copper: 1, silver: 10, gold: 0 };
  const result = createListOfCoins(coins);
  describe("when an entry is a 0", () => {
    it("then returns does not add those entries to those strings", () => {
      expect(result.includes("bit")).toBeFalsy();
    });
  });

  describe("when an entry is a number higher than 0", () => {
    it("then returns a string with that entry", () => {
      expect(result.includes("1 copper piece")).toBeTruthy();
    });
  });

  describe("when an entry is a number higher than 1", () => {
    it("then returns a string with that entry which is plural", () => {
      expect(result.includes("10 silver shillings")).toBeTruthy();
    });
  });
});
