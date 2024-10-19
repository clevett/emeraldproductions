"use client";
import { selector, DefaultValue, selectorFamily } from "recoil";
import { ZoneSector } from "../data/myz_create_the_zone";
import { sectorFamily, sectorIdsAtom } from "./atoms";

export const selectSectorById = selectorFamily<ZoneSector | undefined, string>({
  key: "SELECT_OPERATION_BY_ID",
  get:
    (id) =>
    ({ get }) => {
      return get(sectorFamily(id));
    },
  set:
    (id) =>
    ({ set, reset, get }, newValue) => {
      const ids = get(sectorIdsAtom);
      const atom = sectorFamily(id);

      if (newValue instanceof DefaultValue || newValue === undefined) {
        const filterIds = ids.filter((e: string) => e !== id);
        set(sectorIdsAtom, () => filterIds ?? []);
        reset(sectorFamily(id));
        return;
      }

      set(atom, newValue);

      if (ids.find((i: string) => i === newValue.id)) {
        return;
      }

      if (ids && !ids.includes(id)) {
        set(sectorIdsAtom, (prev) => [...prev, id]);
      }
    },
});

export const selectSectorFamily = selector({
  key: "SELECT_OPERATION_FAMILY",
  get: ({ get }): ZoneSector[] => {
    const ids = get(sectorIdsAtom);
    const family = ids.map((id) => get(selectSectorById(id)));
    return family.filter((o): o is ZoneSector => !!o);
  },
  set: ({ set, reset, get }, newValue) => {
    const ids = get(sectorIdsAtom);

    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(sectorIdsAtom);
      ids.forEach((i) => reset(selectSectorById(i)));
      return;
    }
  },
});
