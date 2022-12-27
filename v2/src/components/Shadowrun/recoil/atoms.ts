import { atom, atomFamily } from "recoil";
import { Option, Options } from "../../../data/srMissions";
import { getOption } from "../helpers/";

export const missionIdsAtom = atom<Option[]>({
  key: "SHADOWRUN_MISSION_IDS_ATOM",
  default: Object.values(Options),
});

export const missionAtomFamily = atomFamily({
  key: "SHADOWRUN_MISSION_FAMILY",
  default: (param: Option) => getOption(param),
});
