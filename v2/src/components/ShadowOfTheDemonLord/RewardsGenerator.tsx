import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import { levels } from "../../data/sotdlDangerLevels";
import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { Level, LevelSelect } from "./components/LevelSelect";
import { Treasure } from "./helpers/Treasure";

import { buildResultString } from "./helpers/buildResultString";

const capitalize = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const getTreasure = (gold: number, level: Level) => {
  const treasure = new Treasure(level);
  return buildResultString(gold, treasure.deleteNullCoins());
};

export const RewardsGenerator = () => {
  const [level, setLevel] = useState<Level>(levels[1]);
  const [gold, setGold] = useState(5);
  const [result, setResult] = useState(getTreasure(gold, level));

  const handleClick = () => {
    setResult(getTreasure(gold, level));
  };

  const onChange = (level: Level) => {
    const treasure = new Treasure(level);
    setLevel(level);
    setGold(treasure.gold);
    setResult(getTreasure(gold, level));
  };

  return (
    <LayoutBody
      DriveThruId="155572"
      subtitle="Rewards Generator"
      title="Shadow of the Demon Lord"
    >
      <CardPanel>
        <EuiTitle className="text-center mb-10" size="s">
          <h4>
            Treasure per level at {capitalize(level)} totals {gold} gc
          </h4>
        </EuiTitle>
        <EuiFlexGroup className="center w-100 mb-10 justify-center">
          <EuiText>{result}</EuiText>
        </EuiFlexGroup>
        <EuiFlexGroup className="flex-row mb-2 justify-start gap-4">
          <EuiFlexItem className="max-w-xs">
            <LevelSelect level={level} onChange={onChange} />
          </EuiFlexItem>
          <EuiFlexItem className="max-w-xs justify-end">
            <EuiButton onClick={handleClick} fill>
              Generate Treasure
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </CardPanel>
    </LayoutBody>
  );
};
