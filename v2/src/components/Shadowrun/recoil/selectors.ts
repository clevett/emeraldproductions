import { selector, DefaultValue, selectorFamily } from "recoil";
import { MissionElement, Option } from "../../../data/srMissions";
import { missionAtomFamily, missionIdsAtom } from "./atoms";

export const selectOperationFamily = selector({
  key: "SELECT_OPERATION_FAMILY",
  get: ({ get }): MissionElement[] => {
    const ids = get(missionIdsAtom);
    const family = ids.map((id) => get(missionAtomFamily(id)));
    return family.filter((o): o is MissionElement => !!o);
  },
  set: ({ set, reset, get }, newValue) => {
    const ids = get(missionIdsAtom);

    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(missionIdsAtom);
      ids.forEach((i) => reset(missionAtomFamily(i)));
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
