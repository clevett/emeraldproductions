import { atom, atomFamily } from "recoil";
import { Option, Options } from "../../../data/srMissions";
import { types, nuyen } from "../../../data/srRewards";
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

export const rewardsIdsAtom = atom({
  key: "SHADOWRUN_REWARDS_IDS_ATOM",
  default: nuyen.map((e) => e.name),
});

export const rewardsAtomFamily = atomFamily({
  key: "SHADOWRUN_REWARDS_FAMILY",
  default: false,
});
