import { diceroller } from "@/app/resources/metadata";
import { DiceRoller, Loading } from "@/app/components";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = diceroller;

export default function DiceRollerHome() {
  return (
    <Suspense fallback={<Loading />}>
      <DiceRoller />
    </Suspense>
  );
}
