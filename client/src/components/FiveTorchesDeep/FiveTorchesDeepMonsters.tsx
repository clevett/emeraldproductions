import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";
import { useState } from "react";
import { fuzzySearch } from "../SearchBar/fuzzySearch";
import { SearchBar } from "../SearchBar/SearchBar";
import convertFifthMonsterToFTD from "./helpers/convertFifthMonsterToFTD";

import { FifthEditionMonster } from "../../data/5eMonsters";

import { MonsterFTD } from "./types/ftdTypes";
import { MonsterCard } from "./components/MonsterCard";

import styles from "./styles.module.css";
import { LayoutBody } from "../LayoutBody";

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
        <EuiFlexItem key={`ftd-monster-${index}`} className={styles.card}>
          <MonsterCard key={monster.name} monster={monster} />
        </EuiFlexItem>
      );
    });

  const renderedList = () => {
    if (filteredMonsters) {
      return (
        <EuiFlexGroup gutterSize="l" wrap className="justify-start">
          {cardNodes(filteredMonsters)}
        </EuiFlexGroup>
      );
    }

    return null;
  };

  const onTermSubmit = (term: string) =>
    setFilteredMonsters(getSearchResults(term));

  return (
    <LayoutBody
      title="Five Torches Deep"
      subtitle="Fifth Edition Bestiary"
      DriveThruId="264584"
    >
      <SearchBar onTermSubmit={onTermSubmit} />
      <EuiSpacer />
      {renderedList()}
    </LayoutBody>
  );
};
