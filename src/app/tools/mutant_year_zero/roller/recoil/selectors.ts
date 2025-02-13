import { DefaultValue, selector } from "recoil";
import { attributeAtom, skillAtom, gearAtom } from "./atoms";

export const attributeSelector = selector({
  key: "ATTRIBUTE_SELECTOR",
  get: ({ get }) => {
    return get(attributeAtom);
  },
  set: ({ reset, set }, newValue) => {
    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(attributeAtom);
      return;
    }

    set(attributeAtom, newValue);
  },
});

export const skillSelector = selector({
  key: "SKILL_SELECTOR",
  get: ({ get }) => {
    return get(skillAtom);
  },
  set: ({ reset, set }, newValue) => {
    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(skillAtom);
      return;
    }

    set(skillAtom, newValue);
  },
});

export const gearSelector = selector({
  key: "GEAR_SELECTOR",
  get: ({ get }) => {
    return get(gearAtom);
  },
  set: ({ reset, set }, newValue) => {
    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(gearAtom);
      return;
    }

    set(gearAtom, newValue);
  },
});
