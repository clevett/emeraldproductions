"use client";
import { useState } from "react";

import { fuzzySearch, SearchBar } from "@/app/components";
import { FifthEditionMonster } from "@/app/data/5eMonsters";

import { MonsterCard } from "./MonsterCard";
import { MonsterFTD } from "../../types/ftdTypes";
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
    <div className="grid gap-4">
      <SearchBar onTermSubmit={onTermSubmit} />
      {filteredMonsters && (
        <div className="flex flex-row justify-start gap-4 flex-wrap">
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
