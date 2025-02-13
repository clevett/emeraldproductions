import { Subtitle } from "@/components";
import { systems, metaMyzDiceRoller } from "@/resources";

import type { Metadata } from "next";
import { DiceRoller } from "./components/DiceRoller";

export const metadata: Metadata = metaMyzDiceRoller;

export default function Page() {
  const { label } = systems.myz.tools.roller;
  return (
    <>
      <Subtitle>{label}</Subtitle>
      <DiceRoller />
    </>
  );
}
