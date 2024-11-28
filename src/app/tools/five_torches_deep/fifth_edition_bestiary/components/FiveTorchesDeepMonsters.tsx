"use client";
import { useState } from "react";

import { fuzzySearch, SearchBar } from "@/components";
import { FifthEditionMonster } from "@/data";

import { MonsterCard } from "./MonsterCard";
import { MonsterFTD } from "../types/ftd";
import convertFifthMonsterToFTD from "../helpers/convertFifthMonsterToFTD";
import styles from "./styles.module.css";

const ftdMonsters = FifthEditionMonster.map((monster) =>
  convertFifthMonsterToFTD(monster)
);

export const FiveTorchesDeepMonsters = () => {
  const getSearchResults = (term: string) =>
    fuzzySearch(ftdMonsters, term, ["name", "size", "type", "hd"]);

  const [filteredMonsters, setFilteredMonsters] = useState<MonsterFTD[] | null>(
    getSearchResults("Goblin")
  );

  const onTermSubmit = (term: string) =>
    setFilteredMonsters(getSearchResults(term));

  return (
    <div className="grid gap-4 auto-rows-max items-start justify-items-center w-full h-full">
      <SearchBar
        label="Type in the name of a 5e monster the press enter"
        onSubmit={onTermSubmit}
        placeholder="Enter monster name"
      />
      {filteredMonsters && (
        <div className="flex flex-row justify-center gap-4 flex-wrap">
          {filteredMonsters.map((monster, index) => {
            return (
              <div key={`ftd-monster-${index}`} className={styles.card}>
                <MonsterCard key={monster.name} monster={monster} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
