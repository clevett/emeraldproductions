"use client";
import { Select } from "@/components";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchNPCsSelector, filtersSelector, dataSelector } from "../recoil";

export default function Page() {
  const [, setSearchResults] = useRecoilState(searchNPCsSelector);
  const [filters, setFilters] = useRecoilState(filtersSelector);

  const data = useRecoilValue(dataSelector);

  const list = ["custom"];

  const descriptors = Array.from(
    new Set(data?.map((e) => e.descriptor))
  ).sort();
  const sources = Array.from(new Set(data?.map((e) => e.source))).sort();
  const difficulties = Array.from(new Set(data?.map((e) => e.difficulty)))
    .sort((a, b) => a - b)
    .map((e) => `${e}`);

  return (
    <form className="grid gap-4">
      <div className="grid gap-4">
        <label className="flex flex-col">
          <span>Name</span>
          <input type="text" />
        </label>
        <Select
          className="min-w-[200px]"
          defaultValue="5"
          list={[...list, ...difficulties]}
          title="Difficulty"
        />

        <Select
          className="min-w-[200px]"
          defaultValue="human"
          list={[...list, ...descriptors]}
          title="Descriptor"
        />

        <Select
          className="min-w-[200px]"
          defaultValue="Shadow of the Demon Lord"
          list={[...list, ...sources]}
          title="Source"
        />
      </div>
      <div className="grid gap-4">
        <button>Search</button>
        <button>Reset</button>
      </div>
    </form>
  );
}
