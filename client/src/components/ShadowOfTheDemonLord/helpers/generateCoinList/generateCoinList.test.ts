import { generateCoinList } from "./generateCoinList";

describe("Given generateCoinList is called", () => {
  it("then returns an object with coin values", () => {
    const rollFormulas = { bit: "2d6", cp: "2d6", ss: "6d6", gc: "3d6" };
    const total = 5;
    const result = generateCoinList(total, rollFormulas);

    expect(result).toHaveProperty("bit");
    expect(result).toHaveProperty("copper");
    expect(result).toHaveProperty("silver");
    expect(result).toHaveProperty("gold");
  });
});
