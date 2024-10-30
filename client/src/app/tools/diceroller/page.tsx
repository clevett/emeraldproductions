import { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { diceroller } from "@/app/resources/metadata";
import { Loading } from "@/app/components";

export const metadata: Metadata = diceroller;

const DiceRoller = dynamic(() => import("./components/DiceRoller"), {
  ssr: false,
});

export default function DiceRollerHome() {
  return (
    <Suspense fallback={<Loading />}>
      <DiceRoller />
    </Suspense>
  );
}
