import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
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
import { capitalize } from "../helpers/capitalize";

import styles from "./styles.module.css";

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
      <div className={`${styles.maxW500}`}>
        <CardPanel>
          <EuiTitle className="text-center w-full" size="s">
            <h4>
              Treasure per level at {capitalize(level)} totals {gold} gc
            </h4>
          </EuiTitle>
          <EuiSpacer size="xl" />

          <EuiFlexItem className="w-full">
            <EuiText className="text-center ">{result}</EuiText>
          </EuiFlexItem>

          <EuiSpacer size="xl" />

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
      </div>
    </LayoutBody>
  );
};
