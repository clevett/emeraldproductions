"use client";

import { Select } from "@/components";
import { useRecoilState } from "recoil";
import { searchNPCsSelector } from "../recoil";
import { Monster } from "../types";
import { useState } from "react";
import { sortNamesAlphabetically } from "../utils";

export const Filters = ({ data }: { data: Monster[] }) => {
  const [, setSearchResults] = useRecoilState(searchNPCsSelector);
  const [filters] = useState({
    descriptor: "human",
    source: "",
    difficulty: "",
  });

  const descriptors = Array.from(
    new Set(data?.map((e) => e.descriptor))
  ).sort();
  const sources = Array.from(new Set(data?.map((e) => e.source))).sort();
  const difficulties = Array.from(new Set(data?.map((e) => e.difficulty)))
    .sort((a, b) => a - b)
    .map((e) => `${e}`);

  const filter = (item: string, key: keyof Monster) => {
    const array = data.filter((e) => e[key].toString() === item);
    setSearchResults(sortNamesAlphabetically(array));
  };

  return (
    <div className="grid grid-flow-col gap-4 min-w-[300px] w-full">
      <Select
        className="min-w-[200px]"
        defaultValue={filters.descriptor}
        list={descriptors}
        onChange={(item) => filter(item, "descriptor")}
        title="Descriptor"
      />

      <Select
        className="min-w-[200px]"
        defaultValue={filters.difficulty}
        list={difficulties}
        onChange={(item) => filter(item, "difficulty")}
        title="Difficulty"
      />

      <Select
        className="min-w-[200px]"
        defaultValue={filters.source}
        list={sources}
        onChange={(item) => filter(item, "source")}
        title="Source"
      />
    </div>
  );
};
