import { EuiFlexItem, EuiText } from "@elastic/eui";
import { danger } from "../../../data/sotdlDangerLevels";
import { Level } from "./LevelSelect";
import { SmallTitle } from "./SmallTitle";

export const color = (key: Difficulty) => {
  switch (key) {
    case "easy":
      return "green";
    case "average":
      return "amber";
    case "challenging":
      return "orange";
    case "hard":
      return "red";
    default:
      return "";
  }
};

export type Difficulty = keyof typeof danger["starting"];

export const Difficulties = ({
  difficulty,
  level,
}: {
  difficulty: Difficulty;
  level: Level;
}) => {
  const title = difficulty === "max" ? "Max. Creature Difficulty" : difficulty;

  return (
    <EuiFlexItem>
      <SmallTitle color={color(difficulty)} name={title} />
      <EuiText className="text-center">
        {danger[`${level}`][difficulty]}
      </EuiText>
    </EuiFlexItem>
  );
};
