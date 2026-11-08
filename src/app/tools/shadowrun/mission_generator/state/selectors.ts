import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { MissionElement, Option, Options } from "@/data";
import { getOption } from "../helpers";
import { missionIdsAtom, missionAtomFamily } from "./atoms";

export const selectMissionFamily = atom((get): MissionElement[] =>
  get(missionIdsAtom)
    .map((id) => get(missionAtomFamily(id)))
    .filter((item): item is MissionElement => !!item)
);

export const resetMissionAtom = atom(null, (_get, set) => {
  set(missionIdsAtom, Object.values(Options));
  Object.values(Options).forEach((id) => set(missionAtomFamily(id), getOption(id)));
});

export const selectMission = atomFamily((id: Option) =>
  atom(
    (get) => get(missionAtomFamily(id)),
    (get, set, value: MissionElement | undefined) => {
      set(missionAtomFamily(id), value);
      if (value && !get(missionIdsAtom).includes(id)) {
        set(missionIdsAtom, [...get(missionIdsAtom), id]);
      }
    }
  )
);
