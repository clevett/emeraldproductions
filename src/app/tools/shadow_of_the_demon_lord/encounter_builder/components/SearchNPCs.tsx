"use client";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { fuzzySearch, SearchBar } from "@/components";

import { Monster } from "../types";
import { dataSelector, filtersSelector, searchNPCsSelector } from "../recoil";

export const SearchNPCs = () => {
  const setFilters = useSetRecoilState(filtersSelector);
  const setSearchResults = useSetRecoilState(searchNPCsSelector);
  const data = useRecoilValue(dataSelector);

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
