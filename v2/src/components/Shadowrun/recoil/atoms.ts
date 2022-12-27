import { atomFamily } from "recoil";
import { Option } from "../../../data/srMissions";
import { getOption } from "../helpers/";

export const missionAtomFamily = atomFamily({
  key: "SHADOWRUN_MISSION_FAMILY",
  default: (param: Option) => getOption(param),
});
