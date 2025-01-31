"use client";
import { Button } from "@/components";
import { nanoid } from "nanoid";

import { useRecoilCallback, useRecoilValue } from "recoil";
import { getSector } from "../helpers";
import { threatLevelAtom, selectSectorById } from "../recoil";

export const CreateSector = () => {
  const threat = useRecoilValue(threatLevelAtom);

  const upsertSector = useRecoilCallback(
    ({ set }) =>
      () => {
        const id = nanoid();
        set(selectSectorById(id), getSector(id, threat));
      },
    [threat]
  );

  return <Button onClick={upsertSector}>Create Sector</Button>;
};
