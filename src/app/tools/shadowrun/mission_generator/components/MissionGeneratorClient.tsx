"use client";

import dynamic from "next/dynamic";

const MissionGenerator = dynamic(
  () => import("./MissionGenerator").then((module) => module.MissionGenerator),
  { ssr: false }
);

export default function MissionGeneratorClient() {
  return <MissionGenerator />;
}
