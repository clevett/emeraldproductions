import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useEffect, useState } from "react";
import axios from "axios";
import { LayoutBody } from "../LayoutBody";

import { danger } from "../../data/sotdlDangerLevels";
import { typeChecker, levelsChecker } from "./recoil/refine";
import { useUpdateEffect } from "@elastic/eui/src/services/hooks/useUpdateEffect";
import { fuzzySearch } from "../SearchBar/fuzzySearch";
import { sotdl } from "../../routes/api";

const levels = Object.keys(danger) as Array<keyof typeof danger>;
const difficultiesKeys = Object.keys(danger.starting) as Array<
  keyof typeof danger.starting
>;
const difficulties = [1, 5, 10, 25, 50, 100, 250, 500];

export const EncounterBuilder = () => {
  const [difficultyTotal, setDifficultyTotal] = useState(0);
  const [level, setLevel] = useState(levels[1]);
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState<undefined | unknown[]>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(sotdl.ENCOUNTER_BUILDER)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        onTermSubmit("human");

        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const onTermSubmit = (term: string) => {
    const keys = ["name", "difficulty", "descriptor", "source"];
    if (data) {
      const results: any = fuzzySearch(data, term, keys);
      console.log(results);
      setSearchResults(results);
    }
  };

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
