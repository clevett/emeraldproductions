import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { types, Situation } from "@/data";
import { getDicePoolKarma, getDicePoolNuyen, getBaseNuyen } from "../helpers";

const dicePoolDefault = 14;
export const runTypeAtom = atom(types[1]);
export const opposedDicePoolAtom = atom(dicePoolDefault);
export const diceKarmaAtom = atom(getDicePoolKarma(dicePoolDefault));
export const diceNuyenAtom = atom(getDicePoolNuyen(dicePoolDefault));
export const nuyenBaseAtom = atom(getBaseNuyen(0));
export const nuyenModifiersAtomFamily = atomFamily((_id: Situation) => atom(false));
export const germanFlagAtom = atom(false);
export const survivedAtom = atom(true);
export const objectiveKarmaAtom = atom(2);
export const nuyenModifierPercentAtom = atom(0);
