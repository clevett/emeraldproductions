import type { Metadata } from "next";

import { Subtitle } from "@/components";
import { systems, metaSotdlEncounterBuilder } from "@/resources";

import { EncounterBuilder as Builder } from "./components/EncounterBuilder";
import { Recoil } from "./components/Recoil";
import { Monster } from "./types";
export const metadata: Metadata = metaSotdlEncounterBuilder;

export default async function EncounterBuilder() {
  const { label } = systems.sotdl.tools.sotdlEncounterBuilder;

  const response = await fetch(
    `${process.env.URL}/api/shadow_of_the_demon_lord/npcs`,
    {
      method: "GET",
    }
  );
  const { data }: { data: Monster[] | undefined } = await response.json();

  const props: {
    ids: Monster["_id"][];
    [key: Monster["_id"]]: unknown;
  } = {
    ids: data?.map((monster) => monster._id) || [],
  };

  data?.forEach((monster) => {
    props[monster._id] = monster;
  });

  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Recoil {...props}>
        <Builder />
      </Recoil>
    </>
  );
}
