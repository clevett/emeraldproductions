"use client";

import { Select } from "@/components";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataSelector, filtersSelector, searchNPCsSelector } from "../recoil";
import { Monster, Filters as FilterType } from "../types";

import { sortNamesAlphabetically } from "../utils";
import { filterMonsters } from "../utils/filter_monster";

export const Filters = () => {
  const [, setSearchResults] = useRecoilState(searchNPCsSelector);
  const [filters, setFilters] = useRecoilState(filtersSelector);

  const data = useRecoilValue(dataSelector);

  const list = ["all"];

  const descriptors = Array.from(
    new Set(data?.map((e) => e.descriptor))
  ).sort();
  const sources = Array.from(new Set(data?.map((e) => e.source))).sort();
  const difficulties = Array.from(new Set(data?.map((e) => e.difficulty)))
    .sort((a, b) => a - b)
    .map((e) => `${e}`);

  const updateSearchResults = (newFilters: FilterType) => {
    const search = filterMonsters(data, newFilters);
    setSearchResults(search);
  };

  const onFilterChange = (item: string, key: keyof Monster) => {
    const newFilters = { ...filters, [key]: item === "all" ? undefined : item };
    setFilters(newFilters);
    updateSearchResults(newFilters);
  };

  return (
    <div className="grid grid-flow-col gap-4 min-w-[300px] w-full">
      <Select
        className="min-w-[200px]"
        defaultValue={filters.difficulty}
        list={[...list, ...difficulties]}
        onChange={(item) => onFilterChange(item, "difficulty")}
        title="Difficulty"
      />

      <Select
        className="min-w-[200px]"
        defaultValue={filters.descriptor}
        list={[...list, ...descriptors]}
        onChange={(item) => onFilterChange(item, "descriptor")}
        title="Descriptor"
      />

      <Select
        className="min-w-[200px]"
        defaultValue={filters.source}
        list={[...list, ...sources]}
        onChange={(item) => onFilterChange(item, "source")}
        title="Source"
      />
    </div>
  );
};
