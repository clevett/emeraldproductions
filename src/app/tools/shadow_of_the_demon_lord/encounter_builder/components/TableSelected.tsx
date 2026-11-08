"use client";

import { useAtom, useAtomValue } from "jotai";

import { Table } from "@/components";

import { dataSelector, selectedNPCsSelector } from "../state";
import { Monster } from "../types";

export const TableSelected = () => {
  const [selected, setSelected] = useAtom(selectedNPCsSelector);
  const data = useAtomValue(dataSelector);

  const updateSelected = (monster: Monster) => {
    const index = selected.findIndex((m) => m._id === monster._id);
    const monsters = [...selected];

    if (index >= 0) {
      monsters.splice(index, 1);
      setSelected(monsters);
    }
  };

  if (!data) return null;

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
        selected?.map((e) => ({
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
