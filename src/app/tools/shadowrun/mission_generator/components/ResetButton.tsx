"use client";
import { Button } from "@/components";
import { useSetAtom } from "jotai";
import { resetMissionAtom } from "../state";

export const ResetButton = () => {
  const resetOptions = useSetAtom(resetMissionAtom);

  return <Button onClick={() => resetOptions()}>Generate Mission</Button>;
};
