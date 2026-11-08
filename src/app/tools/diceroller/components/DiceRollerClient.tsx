"use client";

import dynamic from "next/dynamic";

const DiceRoller = dynamic(() => import("./DiceRoller"), {
  ssr: false,
});

export default function DiceRollerClient() {
  return <DiceRoller />;
}
