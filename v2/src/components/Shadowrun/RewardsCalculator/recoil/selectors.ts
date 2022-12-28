import { selector, DefaultValue, selectorFamily } from "recoil";
import { Situation, Situations } from "../data/srRewards";
import { filterString } from "../../helpers";
import {
  diceKarmaAtom,
  germanFlagAtom,
  objectiveKarmaAtom,
  nuyenModifiersAtomFamily,
  runTypeAtom,
  survivedAtom,
} from "./atoms";

export const selectNuyenModifier = selectorFamily({
  key: "SELECT_NUYEN_MODIFIER_SELECTOR_FAMILY",
  get:
    (id) =>
    ({ get }) => {
      return get(nuyenModifiersAtomFamily(id));
    },
  set:
    (id: Situation) =>
    ({ set, reset, get }, newValue) => {
      const atom = nuyenModifiersAtomFamily(id);

      console.table({ id, newValue });

      if (newValue instanceof DefaultValue) {
        reset(nuyenModifiersAtomFamily(id));
        return;
      }

      if (newValue) {
        set(atom, newValue);

        // if (id === Situations.THREE_TO_ONE || id === Situations.TWO_TO_ONE) {
        //   const other =
        //     id === Situations.THREE_TO_ONE
        //       ? Situations.TWO_TO_ONE
        //       : Situations.THREE_TO_ONE;
        //   reset(nuyenModifiersAtomFamily(other));
        // }
      }
    },
});

export const selectNuyenModifiers = selector({
  key: "SELECT_NUYEN_MODIFIERS_SELECTOR",
  get: ({ get }) => {
    const ids = Object.values(Situations);
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
