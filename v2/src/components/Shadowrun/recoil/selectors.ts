import { selector, DefaultValue, selectorFamily } from "recoil";
import { MissionElement, Option } from "../../../data/srMissions";
import { getOption } from "../helpers";
import {
  diceKarmaAtom,
  missionAtomFamily,
  missionIdsAtom,
  runTypeAtom,
} from "./atoms";

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
          const filterIds = ids.filter((e) => e !== id);
          set(missionIdsAtom, () => filterIds ?? []);
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

export const selectKarma = selector({
  key: "SELECT_KARMA_TOTAL",
  get: ({ get }) => {
    const run = get(runTypeAtom).karma;
    const dice = get(diceKarmaAtom);

    const total = run + dice;

    console.table({
      run,
      dice,
      total,
    });

    return total;
  },
});
