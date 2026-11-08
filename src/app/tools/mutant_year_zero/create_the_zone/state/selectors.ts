"use client";
import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { ZoneSector } from "@/data/myz_create_the_zone";
import { sectorFamily, sectorIdsAtom } from "./atoms";

export const selectSectorById = atomFamily((id: string) =>
  atom(
    (get) => get(sectorFamily(id)),
    (get, set, value: ZoneSector | undefined) => {
      set(sectorFamily(id), value);
      set(sectorIdsAtom, value
        ? get(sectorIdsAtom).includes(id) ? get(sectorIdsAtom) : [...get(sectorIdsAtom), id]
        : get(sectorIdsAtom).filter((item) => item !== id));
    }
  )
);

export const selectSectorFamily = atom((get) =>
  get(sectorIdsAtom)
    .map((id) => get(selectSectorById(id)))
    .filter((sector): sector is ZoneSector => sector !== undefined)
);
