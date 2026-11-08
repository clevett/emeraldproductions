import type { Metadata } from "next";

import { metaDiceRoller } from "@/resources/metadata";
import DiceRollerClient from "./components/DiceRollerClient";

export const metadata: Metadata = metaDiceRoller;

export default function DiceRollerHome() {
  return <DiceRollerClient />;
}
