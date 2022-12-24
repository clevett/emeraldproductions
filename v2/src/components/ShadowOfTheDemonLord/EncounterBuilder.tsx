import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { LayoutBody } from "../LayoutBody";

import { danger } from "../../data/sotdlDangerLevels";
import { fuzzySearch } from "../SearchBar/fuzzySearch";
import { sotdl } from "../../routes/api";
import { SearchBar } from "../SearchBar/SearchBar";
import { MonsterTable } from "./components/MonsterTable";

import styles from "./styles.module.css";
import { CardPanel } from "../CardPanel";
import { LevelSelect } from "./components/LevelSelect";
import { Difficulties } from "./components/Difficulties";
import { EncounterTitle } from "./components/EncounterTitle";

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
          <LevelSelect level={level} levels={levels} onChange={setLevel} />
        </EuiFlexItem>
        {difficultiesKeys.map((e) => (
          <Difficulties key={`level-${e}`} difficulty={e} level={level} />
        ))}
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiFlexGroup gutterSize="l" wrap className={`justify-start`}>
        <EuiFlexItem className="content-center">
          <EuiFlexItem className={`grid ${styles.col} mb-4 ${styles.max40}`}>
            <EncounterTitle
              total={
                selected?.map((s) => s.difficulty).reduce((a, b) => a + b, 0) ??
                0
              }
              level={level}
            />
          </EuiFlexItem>
          <CardPanel>
            <MonsterTable
              action={Actions.REMOVE}
              data={selected ?? []}
              onSelect={(monster: Monster) =>
                updateEncounter(monster, Actions.REMOVE)
              }
            />
          </CardPanel>
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
          <CardPanel>
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
          </CardPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
