import { getDangerText } from "./get_danger_text";
import { Levels, Difficulties } from "../enums";

describe("getDangerText", () => {
  it("should return correct text for level starting and difficulty easy", () => {
    expect(getDangerText(Levels.STARTING, Difficulties.EASY)).toBe("3 or less");
  });

  it("should return correct text for level starting and difficulty average", () => {
    expect(getDangerText(Levels.STARTING, Difficulties.AVERAGE)).toBe("4-15");
  });

  it("should return correct text for level starting and difficulty challenging", () => {
    expect(getDangerText(Levels.STARTING, Difficulties.CHALLENGING)).toBe(
      "16-30"
    );
  });

  it("should return correct text for level starting and difficulty hard", () => {
    expect(getDangerText(Levels.STARTING, Difficulties.HARD)).toBe(
      "31 or more"
    );
  });

  it("should return correct text for level novice and difficulty easy", () => {
    expect(getDangerText(Levels.NOVICE, Difficulties.EASY)).toBe("10 or less");
  });

  it("should return correct text for level novice and difficulty average", () => {
    expect(getDangerText(Levels.NOVICE, Difficulties.AVERAGE)).toBe("11-30");
  });

  it("should return correct text for level novice and difficulty challenging", () => {
    expect(getDangerText(Levels.NOVICE, Difficulties.CHALLENGING)).toBe(
      "31-50"
    );
  });

  it("should return correct text for level novice and difficulty hard", () => {
    expect(getDangerText(Levels.NOVICE, Difficulties.HARD)).toBe("50 or more");
  });

  it("should return correct text for level expert and difficulty easy", () => {
    expect(getDangerText(Levels.EXPERT, Difficulties.EASY)).toBe("30 or less");
  });

  it("should return correct text for level expert and difficulty average", () => {
    expect(getDangerText(Levels.EXPERT, Difficulties.AVERAGE)).toBe("31-50");
  });

  it("should return correct text for level expert and difficulty challenging", () => {
    expect(getDangerText(Levels.EXPERT, Difficulties.CHALLENGING)).toBe(
      "51-125"
    );
  });

  it("should return correct text for level expert and difficulty hard", () => {
    expect(getDangerText(Levels.EXPERT, Difficulties.HARD)).toBe("126 or more");
  });

  it("should return correct text for level master and difficulty easy", () => {
    expect(getDangerText(Levels.MASTER, Difficulties.EASY)).toBe("50 or less");
  });

  it("should return correct text for level master and difficulty average", () => {
    expect(getDangerText(Levels.MASTER, Difficulties.AVERAGE)).toBe("51-125");
  });

  it("should return correct text for level master and difficulty challenging", () => {
    expect(getDangerText(Levels.MASTER, Difficulties.CHALLENGING)).toBe(
      "126-200"
    );
  });

  it("should return correct text for level master and difficulty hard", () => {
    expect(getDangerText(Levels.MASTER, Difficulties.HARD)).toBe("201 or more");
  });
});
