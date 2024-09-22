import { atom, atomFamily } from "recoil";
import { getOption } from "../helpers";
import { Options, Option } from "../data/srMissions";

export const missionIdsAtom = atom<Option[]>({
  key: "SHADOWRUN_MISSION_IDS_ATOM_ATOM",
  default: Object.values(Options),
});

export const missionAtomFamily = atomFamily({
  key: "SHADOWRUN_MISSION_FAMILY_ATOM",
  default: (param: Option) => getOption(param),
});
