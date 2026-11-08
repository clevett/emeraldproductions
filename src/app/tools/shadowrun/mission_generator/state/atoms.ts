import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { atomWithLazy } from "jotai/utils";
import { getOption } from "../helpers";
import { Options, Option } from "@/data";

export const missionIdsAtom = atom<Option[]>(Object.values(Options));
export const missionAtomFamily = atomFamily((param: Option) =>
  atomWithLazy(() => getOption(param))
);
