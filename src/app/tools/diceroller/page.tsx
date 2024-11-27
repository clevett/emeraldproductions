import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { diceroller } from "@/resources/metadata";

export const metadata: Metadata = diceroller;

const DiceRoller = dynamic(() => import("./components/DiceRoller"), {
  ssr: false,
});

export default function DiceRollerHome() {
  return <DiceRoller />;
}
