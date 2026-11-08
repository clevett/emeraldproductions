import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { Situation, Situations } from "@/data";
import {
  diceKarmaAtom, germanFlagAtom, objectiveKarmaAtom, nuyenModifiersAtomFamily,
  runTypeAtom, survivedAtom, diceNuyenAtom, nuyenModifierPercentAtom, nuyenBaseAtom,
} from "./atoms";

export const selectNuyenModifier = atomFamily((id: Situation) =>
  atom(
    (get) => get(nuyenModifiersAtomFamily(id)),
    (_get, set, value: boolean) => {
      set(nuyenModifiersAtomFamily(id), value);
      const { THREE_TO_ONE, TWO_TO_ONE } = Situations;
      if (id === THREE_TO_ONE || id === TWO_TO_ONE) {
        set(nuyenModifiersAtomFamily(id === THREE_TO_ONE ? TWO_TO_ONE : THREE_TO_ONE), false);
      }
    }
  )
);

export const selectNuyenModifiers = atom((get) =>
  Object.values(Situations).map((id) => get(selectNuyenModifier(id))).filter(Boolean)
);

export const selectKarma = atom((get) => {
  let total = get(runTypeAtom).karma + get(diceKarmaAtom) + get(objectiveKarmaAtom);
  if (get(germanFlagAtom)) total += get(selectNuyenModifiers).length;
  if (get(survivedAtom)) total += 2;
  return total;
});

export const selectNuyen = atom((get) => {
  const base = get(nuyenBaseAtom);
  const highestDicePool = get(diceNuyenAtom);
  const situational = get(selectNuyenModifiers).length;
  const multiple = situational && highestDicePool
    ? situational + highestDicePool
    : situational || highestDicePool || 1;
  const sum = base * multiple;
  return sum + sum * get(nuyenModifierPercentAtom);
});
