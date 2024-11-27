import { atom, atomFamily } from "recoil";
import { types } from "@/data";
import { getDicePoolKarma, getDicePoolNuyen, getBaseNuyen } from "../helpers";

const dicePoolDefault = 14;

export const runTypeAtom = atom({
  key: "SHADOWRUN_RUN_TYPE_ATOM",
  default: types[1],
});

export const opposedDicePoolAtom = atom({
  key: "SHADOWRUN_DICE_POOL_ATOM",
  default: dicePoolDefault,
});

export const diceKarmaAtom = atom({
  key: "SHADOWRUN_DICE_KARMA_ATOM",
  default: getDicePoolKarma(dicePoolDefault),
});

export const diceNuyenAtom = atom({
  key: "SHADOWRUN_DICE_NUYEN_ATOM",
  default: getDicePoolNuyen(dicePoolDefault),
});

export const nuyenBaseAtom = atom({
  key: "SHADOWRUN_NUYEN_BASE_ATOM",
  default: getBaseNuyen(0),
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
  default: true,
});

export const objectiveKarmaAtom = atom({
  key: "SHADOWRUN_OBJECTIVE_KARMA_ATOM",
  default: 2,
});

export const nuyenModifierPercentAtom = atom({
  key: "SHADOWRUN_NUYEN_PERCENT_MODIFIER_ATOM",
  default: 0,
});
