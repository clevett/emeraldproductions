import { atom, atomFamily } from "recoil";
import { types } from "../data/srRewards";
import { getDicePoolKarma } from "../helpers";

export const runTypeAtom = atom({
  key: "SHADOWRUN_RUN_TYPE_ATOM",
  default: types[0],
});

export const diceKarmaAtom = atom({
  key: "SHADOWRUN_DICE_KARMA_ATOM",
  default: getDicePoolKarma(14),
});

export const nuyenAtom = atom({
  key: "SHADOWRUN_NUYEN_ATOM",
  default: 3000,
});

export const nuyenModifiersAtomFamily = atomFamily({
  key: "SHADOWRUN_REWARDS_FAMILY_ATOM",
  default: false,
});

export const germanFlagAtom = atom({
  key: "SHADOWRUN_GERMAN_FLAG_ATOM",
  default: false,
});

export const survivedAtom = atom({
  key: "SHADOWRUN_SURVIVED_FLAG_ATOM",
  default: false,
});

export const objectiveKarmaAtom = atom({
  key: "SHADOWRUN_OBJECTIVE_KARMA_ATOM",
  default: 2,
});

export const nuyenModifierPercentAtom = atom({
  key: "SHADOWRUN_NUYEN_PERCENT_MODIFIER_ATOM",
  default: 0.1,
});

export const nuyenSituationModifierAtom = atom({
  key: "SHADOWRUN_NUYEN_SITUATION_MODIFIER_ATOM",
  default: 0.1,
});
