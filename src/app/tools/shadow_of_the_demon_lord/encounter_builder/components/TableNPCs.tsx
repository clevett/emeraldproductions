"use client";

import { useRecoilState, useRecoilValue } from "recoil";

import { Table } from "@/components";

import { Monster } from "../types";
import {
  selectedNPCsSelector,
  searchNPCsSelector,
  dataSelector,
} from "../recoil";

export const TableNPCs = () => {
  const [selected, setSelected] = useRecoilState(selectedNPCsSelector);
  const data = useRecoilValue(dataSelector);
  const searchResults = useRecoilValue(searchNPCsSelector);

  const updateSelected = (monster: Monster) => {
    const array = !selected ? [monster] : [...selected, monster];
    setSelected(array);
  };

  const rows = searchResults ?? [];

  return (
    <Table
      columns={
        data[0]
          ? Object.keys(data[0])
              .map((e) => (e !== "_id" ? { header: e } : null))
              .filter((e) => e !== null)
          : []
      }
      rows={
        rows?.map((e) => ({
          id: e._id,
          header: e.name,
          cell: [e.difficulty, e.descriptor, e.source],
        })) ?? []
      }
      onRowClick={(id: Monster["_id"]) => {
        const monster = data.find((e) => e._id === id);
        if (monster) {
          updateSelected(monster);
        }
      }}
    />
  );
};
