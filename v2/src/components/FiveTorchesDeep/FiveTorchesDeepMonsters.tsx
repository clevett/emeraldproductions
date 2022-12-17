import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import { DriveThruLink } from "../DriveThruLink";
import { fuzzySearch } from "../SearchBar/fuzzySearch";
import { SearchBar } from "../SearchBar/SearchBar";
import convertFifthMonsterToFTD from "./helpers/convertFifthMonsterToFTD";

import { FifthEditionMonster } from "../../data/5eMonsters";

import { MonsterFTD } from "./types/ftdTypes";
import { MonsterCard } from "./components/MonsterCard";

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
        <EuiFlexItem
          key={`ftd-monster-${index}`}
          style={{ minWidth: "350px", maxWidth: "500px" }}
        >
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
    <>
      <DriveThruLink id="264584">
        <EuiTitle size="l">
          <h2>Five Torches Deep</h2>
        </EuiTitle>
      </DriveThruLink>
      <EuiSpacer />
      <EuiTitle size="s">
        <h3>Fifth Edition Bestiary</h3>
      </EuiTitle>
      <EuiSpacer />
      <EuiPanel hasShadow={false} paddingSize="none">
        <>
          <SearchBar onTermSubmit={onTermSubmit} />
          <EuiSpacer />
          {renderedList()}
        </>
      </EuiPanel>
    </>
  );
};
