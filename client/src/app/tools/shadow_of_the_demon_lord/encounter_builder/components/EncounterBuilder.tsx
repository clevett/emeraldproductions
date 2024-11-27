"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { danger, levels } from "@/data";
import {
  Heading,
  fuzzySearch,
  SearchBar,
  Loading,
  Select,
  Table,
} from "@/components";

import { Actions } from "../enums";
import { data, Monster, Action } from "../types";
import { typeChecker, levelsChecker } from "../recoil/refine";

import { getColor, getDanger } from "../utils";

const difficultiesKeys = Object.keys(danger.starting) as Array<
  keyof typeof danger.starting
>;

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
        .get(process.env.NEXT_PUBLIC_ENCOUNTER_BUILDER_API ?? "")
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
    <div className="grid gap-4 auto-rows-min p-4">
      <Heading as="h4">
        <h4>Level Difficulty Ranges</h4>
      </Heading>

      <div className="flex flex-row flex-wrap gap-4 justify-between text-center">
        <div className="grid gap-4">
          <Heading as="h4">
            <h4>Level</h4>
          </Heading>
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
                <h4>{title}</h4>
              </Heading>
              <p className="text-center">{danger[`${level}`][difficulty]}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        <div className="grid gap-4 content-center flex-1 min-w-[300px]">
          <Heading as="h4" className=" text-center">
            <h4 className="inline">
              Encounter Difficulty (
              <span
                className={`inline text-2xl ${
                  range && `text-${getColor(range)}-600`
                }`}
              >
                {total}
              </span>
              )
            </h4>
          </Heading>
          <div className="bg-card px-2 py-4">
            {isLoading ? <Loading /> : <div>stuff</div>}
          </div>
        </div>

        <div className="grid gap-4 content-center flex-1 min-w-[300px]">
          <div className="grid gap-4 grid-flow-col">
            <Heading as="h4" className="text-center">
              <h4>Bestiary</h4>
            </Heading>
            <SearchBar
              onSubmit={onTermSubmit}
              styles="flex justify-center"
              placeholder="Search monster"
              label="monster search"
            />
          </div>
          <div className="bg-card px-2 py-4">
            {isLoading ? (
              <Loading />
            ) : (
              <Table
                columns={
                  data?.[0]
                    ? Object.keys(data[0])
                        .map((e) => (e !== "_id" ? { header: e } : null))
                        .filter((e) => e !== null)
                    : []
                }
                rows={
                  data?.map((e) => ({
                    header: e.name,
                    cell: [e.difficulty, e.descriptor, e.source],
                  })) ?? []
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
