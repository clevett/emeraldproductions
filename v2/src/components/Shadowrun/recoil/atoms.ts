import { atom, atomFamily } from "recoil";
import { Option, Options } from "../../../data/srMissions";
import { types } from "../../../data/srRewards";
import { getOption } from "../helpers/";

// Mission Generator
export const missionIdsAtom = atom<Option[]>({
  key: "SHADOWRUN_MISSION_IDS_ATOM",
  default: Object.values(Options),
});

export const missionAtomFamily = atomFamily({
  key: "SHADOWRUN_MISSION_FAMILY",
  default: (param: Option) => getOption(param),
});

//Rewards
export const runTypeAtom = atom({
  key: "SHADOWRUN_RUN_TYPE",
  default: types[0],
});

export const diceKarmaAtom = atom({
  key: "SHADOWRUN_DICE_KARMA",
  default: Math.floor(14 / 6),
});

export const nuyenAtom = atom({
  key: "SHADOWRUN_NUYEN",
  default: 1000,
});
