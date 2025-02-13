import { atom } from "recoil";

export const attributeAtom = atom({
  key: "ATTRIBUTE_ATOM",
  default: 3,
});

export const skillAtom = atom({
  key: "SKILL_ATOM",
  default: 3,
});

export const gearAtom = atom({
  key: "GEAR_ATOM",
  default: 0,
});
