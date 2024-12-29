import { getDangerRanges } from "./get_danger_ranges";
import { Levels } from "../enums";

describe("getDangerRanges", () => {
  it("should return correct ranges for level 1 (starting)", () => {
    const result = getDangerRanges(Levels.STARTING);
    expect(result).toEqual({
      easy: { min: 0, max: 3 },
      average: { min: 4, max: 15 },
      challenging: { min: 16, max: 30 },
      hard: { min: 31, max: null },
    });
  });

  it("should return correct ranges for level 2 (novice)", () => {
    const result = getDangerRanges(Levels.NOVICE);
    expect(result).toEqual({
      easy: { min: 0, max: 10 },
      average: { min: 11, max: 30 },
      challenging: { min: 31, max: 50 },
      hard: { min: 50, max: null },
    });
  });

  it("should return correct ranges for level 3 (expert)", () => {
    const result = getDangerRanges(Levels.EXPERT);
    expect(result).toEqual({
      easy: { min: 0, max: 30 },
      average: { min: 31, max: 50 },
      challenging: { min: 51, max: 125 },
      hard: { min: 126, max: null },
    });
  });

  it("should return correct ranges for level 4 (master)", () => {
    const result = getDangerRanges(Levels.MASTER);
    expect(result).toEqual({
      easy: { min: 0, max: 50 },
      average: { min: 51, max: 125 },
      challenging: { min: 126, max: 200 },
      hard: { min: 201, max: null },
    });
  });
});
