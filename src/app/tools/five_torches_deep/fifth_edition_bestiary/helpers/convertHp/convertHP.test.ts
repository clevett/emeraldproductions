import convertHp from "./convertHP";

import { rollD8s } from "./convertHP";

import { ftdMonsters } from "@/data";

describe("Given convert HP is called", () => {
  it("then returns a string", () => {
    const hp = convertHp(1, ftdMonsters[2]);
    expect(typeof hp).toEqual("string");
    expect(hp).toEqual("5 (1d8)");
  });
});

describe("Given roll has been imported", () => {
  describe("when passed a number of d8s to roll", () => {
    it("then returns the total of rolled d8s", () => {
      expect(typeof rollD8s(3)).toEqual("number");
    });
  });
});
