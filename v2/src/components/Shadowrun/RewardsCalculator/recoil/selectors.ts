import { selector, DefaultValue, selectorFamily } from "recoil";
import { Nuyen } from "../data/srRewards";
import { filterString } from "../../helpers";
import {
  diceKarmaAtom,
  germanFlagAtom,
  objectiveKarmaAtom,
  nuyenModifiersAtomFamily,
  modifierIdsAtom,
  runTypeAtom,
  survivedAtom,
} from "./atoms";

export const selectNuyenModifier = selectorFamily({
  key: "SELECT_NUYEN_MODIFIER_SELECTOR_FAMILY",
  get:
    (id) =>
    ({ get }) => {
      const operation = get(nuyenModifiersAtomFamily(id));
      return operation;
    },
  set:
    (id: Nuyen["name"]) =>
    ({ set, reset, get }, newValue) => {
      const ids = get(modifierIdsAtom);
      const atom = nuyenModifiersAtomFamily(id);

      if (newValue instanceof DefaultValue) {
        set(modifierIdsAtom, () => filterString(id, ids));
        reset(nuyenModifiersAtomFamily(id));
        return;
      }

      if (newValue) {
        set(atom, newValue);

        if (ids.find((e) => e === id)) {
          return;
        }

        if (ids && !ids.includes(id)) {
          set(modifierIdsAtom, (prev) => [...prev, id]);
        }
      }
    },
});

export const selectNuyenModifiers = selector({
  key: "SELECT_NUYEN_MODIFIERS_SELECTOR",
  get: ({ get }) => {
    const ids = get(modifierIdsAtom);
    const family = ids.map((id) => get(selectNuyenModifier(id)));
    return family.filter((o) => !!o);
  },
});

export const selectKarma = selector({
  key: "SELECT_KARMA_TOTAL",
  get: ({ get }) => {
    const run = get(runTypeAtom).karma;
    const dice = get(diceKarmaAtom);
    const objective = get(objectiveKarmaAtom);
    let total = run + dice + objective;

    const useGermanRules = get(germanFlagAtom);
    if (useGermanRules) {
      const modifiers = get(selectNuyenModifiers);
      total = total + modifiers.length;
    }

    const survived = get(survivedAtom);
    if (survived) {
      total = total + 2;
    }

    console.table({
      run,
      dice,
      objective,
      total,
    });

    return total;
  },
});
