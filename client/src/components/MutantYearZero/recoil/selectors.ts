import { selector, DefaultValue } from "recoil";
import { sectorAtom } from "./atoms";

export const selectSector = selector({
  key: "SELECT_SECTOR",
  get: ({ get }) => {
    const sector = get(sectorAtom);
    return sector;
  },
  set: ({ set, reset, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(sectorAtom);
      return;
    }
  },
});
