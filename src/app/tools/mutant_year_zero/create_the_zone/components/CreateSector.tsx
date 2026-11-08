"use client";
import { Button } from "@/components";
import { nanoid } from "nanoid";

import { useAtomValue, useStore } from "jotai";
import { getSector } from "../helpers";
import { threatLevelAtom, selectSectorById } from "../state";

export const CreateSector = () => {
  const threat = useAtomValue(threatLevelAtom);
  const store = useStore();

  const upsertSector = () => {
    const id = nanoid();
    store.set(selectSectorById(id), getSector(id, threat));
  };

  return <Button onClick={upsertSector}>Create Sector</Button>;
};
