"use client";
import { useState } from "react";
import { fuzzySearch, SearchBar } from "@/app/components";
import convertFifthMonsterToFTD from "../helpers/convertFifthMonsterToFTD";

import { FifthEditionMonster } from "@/app/data/5eMonsters";

import { MonsterFTD } from "../../types/ftdTypes";
import { MonsterCard } from "./MonsterCard";

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

  const cardNodes = (monsters: MonsterFTD[]) =>
    monsters.map((monster, index) => {
      return (
        <div key={`ftd-monster-${index}`} className={styles.card}>
          <MonsterCard key={monster.name} monster={monster} />
        </div>
      );
    });

  const renderedList = () => {
    if (filteredMonsters) {
      return (
        <div className="justify-start gap-1 flex-wrap">
          {cardNodes(filteredMonsters)}
        </div>
      );
    }

    return null;
  };

  const onTermSubmit = (term: string) =>
    setFilteredMonsters(getSearchResults(term));

  return (
    <div>
      <SearchBar onTermSubmit={onTermSubmit} />
      {renderedList()}
    </div>
  );
};
