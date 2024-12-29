import { getMinMax } from "./get_min_max";

describe("getMinMax", () => {
  it('should return correct min and max for "10 or less"', () => {
    expect(getMinMax("10 or less")).toEqual({ min: 0, max: 10 });
  });

  it('should return correct min and max for "5-15"', () => {
    expect(getMinMax("5-15")).toEqual({ min: 5, max: 15 });
  });

  it('should return correct min and max for "20 or more"', () => {
    expect(getMinMax("20 or more")).toEqual({ min: 20, max: null });
  });
});
