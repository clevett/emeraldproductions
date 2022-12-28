import { selector, DefaultValue, selectorFamily } from "recoil";
import { Nuyen } from "../data/srRewards";
import { filterString } from "../../helpers";
import {
  diceKarmaAtom,
  objectiveKarmaAtom,
  rewardsAtomFamily,
  rewardsIdsAtom,
  runTypeAtom,
} from "./atoms";

//Rewards Calculator
export const selectNuyenModifier = selectorFamily({
  key: "SELECT_MISSION_OPTION",
  get:
    (id) =>
    ({ get }) => {
      const operation = get(rewardsAtomFamily(id));
      return operation;
    },
  set:
    (id: Nuyen["name"]) =>
    ({ set, reset, get }, newValue) => {
      const ids = get(rewardsIdsAtom);
      const atom = rewardsAtomFamily(id);

      if (newValue instanceof DefaultValue) {
        set(rewardsIdsAtom, () => filterString(id, ids));
        reset(rewardsAtomFamily(id));
        return;
      }

      if (newValue) {
        set(atom, newValue);

        if (ids.find((e) => e === id)) {
          return;
        }

        if (ids && !ids.includes(id)) {
          set(rewardsIdsAtom, (prev) => [...prev, id]);
        }
      }
    },
});

export const selectKarma = selector({
  key: "SELECT_KARMA_TOTAL",
  get: ({ get }) => {
    const run = get(runTypeAtom).karma;
    const dice = get(diceKarmaAtom);
    const objective = get(objectiveKarmaAtom);

    const total = run + dice + objective;

    console.table({
      run,
      dice,
      objective,
      total,
    });

    return total;
  },
});
