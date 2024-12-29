import { getDanger } from "./get_danger";
import { Levels, Difficulties } from "../enums";

describe("getDanger", () => {
  it("should return 'easy' for total 3 at level starting", () => {
    expect(getDanger(3, Levels.STARTING)).toBe(Difficulties.EASY);
  });

  it("should return 'average' for total 10 at level starting", () => {
    expect(getDanger(10, Levels.STARTING)).toBe(Difficulties.AVERAGE);
  });

  it("should return 'challenging' for total 20 at level starting", () => {
    expect(getDanger(20, Levels.STARTING)).toBe(Difficulties.CHALLENGING);
  });

  it("should return 'hard' for total 35 at level starting", () => {
    expect(getDanger(35, Levels.STARTING)).toBe(Difficulties.HARD);
  });

  it("should return 'easy' for total 5 at level novice", () => {
    expect(getDanger(5, Levels.NOVICE)).toBe(Difficulties.EASY);
  });

  it("should return 'average' for total 20 at level novice", () => {
    expect(getDanger(20, Levels.NOVICE)).toBe(Difficulties.AVERAGE);
  });

  it("should return 'challenging' for total 40 at level novice", () => {
    expect(getDanger(40, Levels.NOVICE)).toBe(Difficulties.CHALLENGING);
  });

  it("should return 'hard' for total 60 at level novice", () => {
    expect(getDanger(60, Levels.NOVICE)).toBe(Difficulties.HARD);
  });

  it("should return 'easy' for total 25 at level expert", () => {
    expect(getDanger(25, Levels.EXPERT)).toBe(Difficulties.EASY);
  });

  it("should return 'average' for total 40 at level expert", () => {
    expect(getDanger(40, Levels.EXPERT)).toBe(Difficulties.AVERAGE);
  });

  it("should return 'challenging' for total 100 at level expert", () => {
    expect(getDanger(100, Levels.EXPERT)).toBe(Difficulties.CHALLENGING);
  });

  it("should return 'hard' for total 150 at level expert", () => {
    expect(getDanger(150, Levels.EXPERT)).toBe(Difficulties.HARD);
  });

  it("should return 'easy' for total 40 at level master", () => {
    expect(getDanger(40, Levels.MASTER)).toBe(Difficulties.EASY);
  });

  it("should return 'average' for total 100 at level master", () => {
    expect(getDanger(100, Levels.MASTER)).toBe(Difficulties.AVERAGE);
  });

  it("should return 'challenging' for total 150 at level master", () => {
    expect(getDanger(150, Levels.MASTER)).toBe(Difficulties.CHALLENGING);
  });

  it("should return 'hard' for total 250 at level master", () => {
    expect(getDanger(250, Levels.MASTER)).toBe("hard");
  });
});
