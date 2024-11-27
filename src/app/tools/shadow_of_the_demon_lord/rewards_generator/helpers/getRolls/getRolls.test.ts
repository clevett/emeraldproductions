import getRolls from "./getRolls";

describe("Given getRolls is callsed", () => {
  describe("when passed a list of rolls", () => {
    it("then returns an array of results", () => {
      const results = getRolls({ gc: "1d6" });
      expect(Array.isArray(results)).toBeTruthy();
      expect(results[0].name).toEqual("gc");
    });
  });
});
