import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import { MonsterCard } from "../FiveTorchesDeep/components/MonsterCard";
import { LayoutBody } from "../LayoutBody";

import { danger } from "../../data/sotdlDangerLevels";
import { typeChecker, levelsChecker } from "./recoil/refine";

const levels = Object.keys(danger) as Array<keyof typeof danger>;
const difficultiesKeys = Object.keys(danger.starting) as Array<
  keyof typeof danger.starting
>;
const difficulties = [1, 5, 10, 25, 50, 100, 250, 500];

export const EncounterBuilder = () => {
  const [difficultyTotal, setDifficultyTotal] = useState(0);
  const [level, setLevel] = useState(levels[1]);
  const [searchResults, setSearchResults] = useState([]);

  const getSmallTitles = (name: string) => {
    return (
      <EuiTitle className="text-center capitalize" size="xs">
        <h5>{name}</h5>
      </EuiTitle>
    );
  };

  return (
    <LayoutBody
      DriveThruId="155572"
      subtitle="Encounter Builder"
      title="Shadow of the Demon Lord"
    >
      <EuiTitle className="text-center" size="s">
        <h4>Level Difficulty Ranges</h4>
      </EuiTitle>

      <EuiSpacer />

      <EuiFlexGroup className="flex-row">
        <EuiFlexItem className="w-10">
          {getSmallTitles("level")}
          <EuiSelect
            className="capitalize"
            onChange={(e) => {
              const result = typeChecker(levelsChecker(e.target.value));
              if (result) {
                setLevel(result);
              }
            }}
            options={levels.map((l) => ({ text: l, name: l }))}
            value={level}
          />
        </EuiFlexItem>

        {difficultiesKeys.map((d) => {
          const title = d === "max" ? "Max. Creature Difficulty" : d;
          return (
            <EuiFlexItem key={`level-${d}`}>
              {getSmallTitles(title)}
              <EuiText className="text-center">{danger[`${level}`][d]}</EuiText>
            </EuiFlexItem>
          );
        })}
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiTitle className="text-center" size="s">
        <h4>Encounter Difficulty ({difficultyTotal})</h4>
      </EuiTitle>

      <EuiSpacer />

      <EuiFlexGroup gutterSize="l" wrap className="justify-start">
        <EuiFlexItem>
          <div>Selected Monsters</div>
        </EuiFlexItem>
        <EuiFlexItem>
          <div>MonsterOptions</div>
        </EuiFlexItem>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
