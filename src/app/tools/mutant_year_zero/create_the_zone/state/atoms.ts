import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { ZoneSector } from "../../../../../data/myz_create_the_zone";

export const threatLevelAtom = atom(3);
export const sectorIdsAtom = atom<string[]>([]);
export const sectorFamily = atomFamily((id: string) => atom<ZoneSector | undefined>(undefined));
