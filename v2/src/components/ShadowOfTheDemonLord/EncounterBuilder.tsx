import {
  EuiBasicTable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { LayoutBody } from "../LayoutBody";

import { danger } from "../../data/sotdlDangerLevels";
import { typeChecker, levelsChecker } from "./recoil/refine";
import { useUpdateEffect } from "@elastic/eui/src/services/hooks/useUpdateEffect";
import { fuzzySearch } from "../SearchBar/fuzzySearch";
import { sotdl } from "../../routes/api";
import { SearchBar } from "../SearchBar/SearchBar";
import { MonsterTable } from "./components/MonsterTable";

const levels = Object.keys(danger) as Array<keyof typeof danger>;
const difficultiesKeys = Object.keys(danger.starting) as Array<
  keyof typeof danger.starting
>;
const difficulties = [1, 5, 10, 25, 50, 100, 250, 500];

export interface Monster {
  _id: string;
  descriptor: string;
  difficulty: number;
  name: string;
  source: string;
}

type data = Monster[] | undefined;

export const EncounterBuilder = () => {
  const [difficultyTotal, setDifficultyTotal] = useState(0);
  const [level, setLevel] = useState(levels[1]);
  const [searchResults, setSearchResults] = useState<data>(undefined);
  const [data, setData] = useState<data>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<data>(undefined);

  const onTermSubmit = useCallback(
    (term: string) => {
      const keys = ["name", "difficulty", "descriptor", "source"];
      if (data) {
        const results = fuzzySearch<Monster>(data, term, keys);
        setSearchResults(results);
      }
    },
    [data]
  );

  useEffect(() => {
    if (data && !searchResults) {
      onTermSubmit("human");
    }
  }, [data, onTermSubmit, searchResults]);

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
      axios
        .get(sotdl.ENCOUNTER_BUILDER)
        .then((response) => {
          if (!data || data !== response.data) {
            setData(response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [data]);

  const getSmallTitles = (name: string) => {
    return (
      <EuiTitle className="text-center capitalize" size="xs">
        <h5>{name}</h5>
      </EuiTitle>
    );
  };

  // const updateEncounter = (beast: Monster, buttonAction: "add" | "remove") => {
  //   const selected =
  //     buttonAction === "add"
  //       ? addBeast(this.state.selected, beast)
  //       : removeBeast(this.state.selected, beast);
  //   const difficulty =
  //     buttonAction === "add"
  //       ? this.state.difficulty + beast.difficulty
  //       : this.state.difficulty - beast.difficulty;
  //   this.setState({ selected });
  //   this.setState({ difficulty });
  // };

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
        <h4>Encounter Opposition</h4>
      </EuiTitle>

      <EuiSpacer />

      <EuiFlexGroup gutterSize="l" wrap className="justify-start">
        <EuiFlexItem>
          <EuiTitle className="text-center" size="s">
            <h4>Encounter Difficulty ({difficultyTotal})</h4>
          </EuiTitle>
          <EuiSpacer />
          <div>Selected Monsters</div>
        </EuiFlexItem>
        <EuiFlexItem className="content-center">
          <EuiTitle className="text-center mb-4" size="s">
            <h4>Bestiary</h4>
          </EuiTitle>
          <SearchBar onTermSubmit={onTermSubmit} styles="flex justify-center" />
          {isLoading ? (
            <EuiLoadingSpinner size="l" />
          ) : (
            <MonsterTable data={data ?? []} />
          )}
        </EuiFlexItem>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
