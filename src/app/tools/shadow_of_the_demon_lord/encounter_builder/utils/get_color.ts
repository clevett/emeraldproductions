import { Difficulty } from "../types";
import { Difficulties } from "../enums";
export const getColor = (key: Difficulty) => {
  switch (key) {
    case Difficulties.EASY:
      return "green";
    case Difficulties.AVERAGE:
      return "amber";
    case Difficulties.CHALLENGING:
      return "orange";
    case Difficulties.HARD:
      return "red";
    default:
      return "";
  }
};
