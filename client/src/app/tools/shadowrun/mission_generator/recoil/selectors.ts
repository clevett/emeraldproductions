import { selector, DefaultValue, selectorFamily } from "recoil";

import { filterString } from "@/app/tools/utils";
import { MissionElement, Option } from "@/app/data";

import { getOption } from "../helpers";
import { missionIdsAtom, missionAtomFamily } from "./atoms";

export const selectMissionFamily = selector({
  key: "SELECT_MISSION_FAMILY",
  get: ({ get }): MissionElement[] => {
    const ids = get(missionIdsAtom);
    const family = ids.map((id) => get(missionAtomFamily(id)));
    return family.filter((o): o is MissionElement => !!o);
  },
  set: ({ set, reset, get }, newValue) => {
    const ids = get(missionIdsAtom);

    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(missionIdsAtom);
      ids.forEach((i) => {
        set(selectMission(i), getOption(i));
      });
      return;
    }
  },
});

export const selectMission = selectorFamily<MissionElement | undefined, Option>(
  {
    key: "SELECT_MISSION_OPTION",
    get:
      (id) =>
      ({ get }) => {
        const operation = get(missionAtomFamily(id));
        return operation;
      },
    set:
      (id) =>
      ({ set, reset, get }, newValue) => {
        const ids = get(missionIdsAtom);
        const atom = missionAtomFamily(id);

        if (newValue instanceof DefaultValue) {
          set(missionIdsAtom, () => filterString(id, ids));
          reset(missionAtomFamily(id));
          return;
        }

        if (newValue) {
          set(atom, newValue);

          if (ids.find((id) => id === newValue.table)) {
            return;
          }

          if (ids && !ids.includes(id)) {
            set(missionIdsAtom, (prev) => [...prev, id]);
          }
        }
      },
  }
);
