import {
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
import { fuzzySearch } from "../SearchBar/fuzzySearch";
import { sotdl } from "../../routes/api";
import { SearchBar } from "../SearchBar/SearchBar";
import { MonsterTable } from "./components/MonsterTable";

import styles from "./styles.module.css";

const levels = Object.keys(danger) as Array<keyof typeof danger>;
const difficultiesKeys = Object.keys(danger.starting) as Array<
  keyof typeof danger.starting
>;

export interface Monster {
  _id: string;
  descriptor: string;
  difficulty: number;
  name: string;
  source: string;
}

type data = Monster[] | undefined;

export enum Actions {
  ADD = "add",
  REMOVE = "remove",
}

export type Action = `${Actions}`;

export const findIndex = (selected: Monster[], beast: Monster) =>
  Array.isArray(selected) ? selected.indexOf(beast) : false;

export const EncounterBuilder = () => {
  const [level, setLevel] = useState(levels[1]);
  const [searchResults, setSearchResults] = useState<data>(undefined);
  const [data, setData] = useState<data>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<data>(undefined);

  const difficultyTotal = selected
    ?.map((s) => s.difficulty)
    .reduce((a, b) => a + b, 0);

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

  const updateEncounter = (monster: Monster, action: Action) => {
    if (action === Actions.ADD) {
      const array = !selected ? [monster] : [...selected, monster];
      setSelected(array);
    }

    if (selected && action === Actions.REMOVE) {
      const index = selected.indexOf(monster);
      let monsters = selected;

      if (index >= 0) {
        monsters.splice(index, 1);
        setSelected([...monsters]);
      }
    }
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

      <EuiFlexGroup gutterSize="l" wrap className={`justify-start gap-6`}>
        <EuiFlexItem className="content-center">
          <EuiFlexItem className={`grid ${styles.col} mb-4`}>
            <EuiTitle
              className={`col-start-2 text-center ${styles.max40}`}
              size="s"
            >
              <h4>Encounter Difficulty ({difficultyTotal})</h4>
            </EuiTitle>
          </EuiFlexItem>
          <MonsterTable
            action={Actions.REMOVE}
            data={selected ?? []}
            onSelect={(monster: Monster) =>
              updateEncounter(monster, Actions.REMOVE)
            }
          />
        </EuiFlexItem>
        <EuiFlexItem className="content-center">
          <EuiFlexItem className={`grid ${styles.col} mb-4`}>
            <EuiTitle className="col-start-2 text-center" size="s">
              <h4>Bestiary</h4>
            </EuiTitle>
            <SearchBar
              onTermSubmit={onTermSubmit}
              styles="flex justify-center"
            />
          </EuiFlexItem>
          {isLoading ? (
            <EuiLoadingSpinner size="l" />
          ) : (
            <MonsterTable
              action={Actions.ADD}
              data={searchResults ?? []}
              onSelect={(monster: Monster) =>
                updateEncounter(monster, Actions.ADD)
              }
            />
          )}
        </EuiFlexItem>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
