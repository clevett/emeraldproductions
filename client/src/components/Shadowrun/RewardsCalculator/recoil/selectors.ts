import { selector, DefaultValue, selectorFamily } from "recoil";
import { Situation, Situations } from "../data/srRewards";
import {
  diceKarmaAtom,
  germanFlagAtom,
  objectiveKarmaAtom,
  nuyenModifiersAtomFamily,
  runTypeAtom,
  survivedAtom,
  diceNuyenAtom,
  nuyenModifierPercentAtom,
  nuyenBaseAtom,
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

      if (newValue instanceof DefaultValue) {
        reset(nuyenModifiersAtomFamily(id));
        return;
      }

      set(atom, newValue);

      const { THREE_TO_ONE, TWO_TO_ONE } = Situations;
      if (id === THREE_TO_ONE || id === TWO_TO_ONE) {
        const other = id === THREE_TO_ONE ? TWO_TO_ONE : THREE_TO_ONE;
        reset(nuyenModifiersAtomFamily(other));
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

    return total;
  },
});

export const selectNuyen = selector({
  key: "SELECT_NUYEN_TOTAL",
  get: ({ get }) => {
    const base = get(nuyenBaseAtom);

    const getMultiplier = (s: number, h: number) =>
      s && h ? s + h : s ? s : h ? h : 1;
    const highestDicePool = get(diceNuyenAtom);
    const situational = get(selectNuyenModifiers).length;
    const multiple = getMultiplier(situational, highestDicePool);

    const sum = base * multiple;
    const percent = get(nuyenModifierPercentAtom);

    return sum + sum * percent;
  },
});
