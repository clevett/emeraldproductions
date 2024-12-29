import { Difficulties } from "../enums";
import { getColor } from "./get_color";

describe("getColor", () => {
  it("should return green for EASY", () => {
    expect(getColor(Difficulties.EASY)).toBe("green");
  });

  it("should return red for HARD", () => {
    expect(getColor(Difficulties.HARD)).toBe("red");
  });

  it("should return orange for CHALLENGING", () => {
    expect(getColor(Difficulties.CHALLENGING)).toBe("orange");
  });

  it("should return amber for AVERAGE input", () => {
    expect(getColor(Difficulties.AVERAGE)).toBe("amber");
  });

  it("should return empty string by default", () => {
    expect(getColor(Difficulties.MAX)).toBe("");
  });
});
