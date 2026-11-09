"use client";

import { createStore, Provider } from "jotai";
import { ReactNode, useState } from "react";
import { dataAtom, filtersAtom, searchNPCsAtom } from "../state/atoms";
import { Monster } from "../types";
import { filterMonsters } from "../utils/filter_monster";

export function createEncounterStore(monsters: Monster[]) {
  const store = createStore();
  store.set(dataAtom, monsters);
  store.set(searchNPCsAtom, filterMonsters(monsters, store.get(filtersAtom)));
  return store;
}

export function EncounterState({ children, monsters }: { children: ReactNode; monsters: Monster[] }) {
  const [store] = useState(() => createEncounterStore(monsters));

  return <Provider store={store}>{children}</Provider>;
}
