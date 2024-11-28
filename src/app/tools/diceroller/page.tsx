import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { metaDiceRoller } from "@/resources/metadata";

export const metadata: Metadata = metaDiceRoller;

const DiceRoller = dynamic(() => import("./components/DiceRoller"), {
  ssr: false,
});

export default function DiceRollerHome() {
  return <DiceRoller />;
}
