"use client";

import { useAtomValue, useSetAtom } from "jotai";

import { fuzzySearch, SearchBar } from "@/components";

import { Monster } from "../types";
import { dataSelector, filtersSelector, searchNPCsSelector } from "../state";

export const SearchNPCs = () => {
  const setFilters = useSetAtom(filtersSelector);
  const setSearchResults = useSetAtom(searchNPCsSelector);
  const data = useAtomValue(dataSelector);

  const onTermSubmit = (term: string) => {
    const keys = ["name", "difficulty", "descriptor", "source"];
    const search = fuzzySearch<Monster>(data, term, keys);
    setSearchResults(search);
    setFilters({
      difficulty: undefined,
      descriptor: undefined,
      source: undefined,
    });
  };

  return (
    <SearchBar
      label="monster search"
      onSubmit={onTermSubmit}
      placeholder="Search monster"
      styles="w-full xl:max-w-60 w-full"
    />
  );
};
