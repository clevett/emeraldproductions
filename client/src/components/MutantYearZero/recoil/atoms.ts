import { getSector } from "../helpers";
import { atom } from "recoil";
export const sectorAtom = atom({
  key: "SECTOR_ATOM",
  default: getSector(),
});
