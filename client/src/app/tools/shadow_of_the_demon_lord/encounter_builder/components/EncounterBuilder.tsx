"use client";

import { useCallback, useEffect, useState } from "react";

import { danger, levels } from "@/data";
import { Heading, fuzzySearch, SearchBar, Select, Table } from "@/components";

import { Actions } from "../enums";

import { typeChecker, levelsChecker } from "../recoil/refine";

import { getColor, getDanger } from "../utils";
import { Action, Monster } from "../types";

const difficultiesKeys = Object.keys(danger.starting) as Array<
  keyof typeof danger.starting
>;

export const findIndex = (selected: Monster[], beast: Monster) =>
  Array.isArray(selected) ? selected.indexOf(beast) : false;

export const EncounterBuilder = ({ data }: { data?: Monster[] }) => {
  const [level, setLevel] = useState(levels[1]);
  const [searchResults, setSearchResults] = useState<Monster[] | undefined>(
    undefined
  );
  const [selected, setSelected] = useState<Monster[] | undefined>(undefined);

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
    if (data && searchResults === undefined) {
      onTermSubmit("human");
    }
  }, [data, onTermSubmit, searchResults]);

  const updateEncounter = (monster: Monster, action: Action) => {
    if (action === Actions.ADD) {
      const array = !selected ? [monster] : [...selected, monster];
      setSelected(array);
    }

    if (selected && action === Actions.REMOVE) {
      const index = selected.indexOf(monster);
      const monsters = selected;

      if (index >= 0) {
        monsters.splice(index, 1);
        setSelected([...monsters]);
      }
    }
  };

  const total =
    selected?.map((s) => s.difficulty).reduce((a, b) => a + b, 0) ?? 0;
  const range = getDanger(total, level);

  return (
    <div className="grid gap-4 auto-rows-min p-2 md:p-4">
      <Heading as="h4">Level Difficulty Ranges</Heading>

      <div className="flex flex-row flex-wrap gap-4 justify-between text-center">
        <div className="grid gap-4">
          <Heading as="h4">Level</Heading>
          <Select
            title="Level"
            onChange={(e) => {
              const result = typeChecker(levelsChecker(e));
              if (result) {
                setLevel(result);
              }
            }}
            list={levels}
            defaultValue={level}
            className="w-min"
          />
        </div>

        {difficultiesKeys.map((difficulty) => {
          const title =
            difficulty === "max" ? "Max. Creature Difficulty" : difficulty;

          return (
            <div className="grid gap-4" key={`level-${difficulty}`}>
              <Heading
                as="h4"
                className={`text-${getColor(difficulty)}-600 capitalize`}
              >
                {title}
              </Heading>
              <p className="text-center">{danger[`${level}`][difficulty]}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        <div className="grid gap-4 content-start flex-1 min-w-[300px]">
          <Heading as="h4" className="text-center">
            <span className="mr-2">Encounter Difficulty =</span>
            <span
              className={`text-2xl ${range && `text-${getColor(range)}-600`}`}
            >
              {total}
            </span>
          </Heading>
          <div className="bg-card px-2 py-4 rounded">
            <Table
              columns={
                data?.[0]
                  ? Object.keys(data[0])
                      .map((e) => (e !== "_id" ? { header: e } : null))
                      .filter((e) => e !== null)
                  : []
              }
              rows={
                selected?.map((e) => ({
                  id: e._id,
                  header: e.name,
                  cell: [e.difficulty, e.descriptor, e.source],
                })) ?? []
              }
              onRowClick={(id: Monster["_id"]) => {
                const monster = data?.find((e) => e._id === id);
                if (monster) {
                  updateEncounter(monster, Actions.REMOVE);
                }
              }}
            />
          </div>
        </div>

        <div className="grid gap-4 content-start flex-1 min-w-[300px]">
          <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 justify-center content-center gap-4">
            <Heading
              as="h4"
              className="text-center row-start-1 md:col-start-1 md:col-end-3"
            >
              Bestiary
            </Heading>
            <SearchBar
              onSubmit={onTermSubmit}
              styles="md:self-end md:justify-self-end row-start-2 md:row-start-1 md:col-start-2"
              placeholder="Search monster"
              label="monster search"
            />
          </div>
          <div className="bg-card px-2 py-4 rounded shadow-2xl">
            <Table
              columns={
                data?.[0]
                  ? Object.keys(data[0])
                      .map((e) => (e !== "_id" ? { header: e } : null))
                      .filter((e) => e !== null)
                  : []
              }
              rows={
                searchResults?.map((e) => ({
                  id: e._id,
                  header: e.name,
                  cell: [e.difficulty, e.descriptor, e.source],
                })) ?? []
              }
              onRowClick={(id: Monster["_id"]) => {
                const monster = data?.find((e) => e._id === id);
                if (monster) {
                  updateEncounter(monster, Actions.ADD);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
