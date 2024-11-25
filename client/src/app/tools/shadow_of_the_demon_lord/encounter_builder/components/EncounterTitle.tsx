"use client";
import { Heading } from "@/app/components";

import { getColor, getDanger } from "../utils";
import { Level } from "../types";

export const EncounterTitle = ({
  total,
  level,
}: {
  total: number;
  level: Level;
}) => {
  const range = getDanger(total, level);
  const rangeColor = range ? `text-${getColor(range)}-600` : "";

  return (
    <Heading as="h4" className={`col-start-2 text-center`}>
      <h4 className="inline">
        Encounter Difficulty (
        <span className={`inline text-2xl ml-2 ${rangeColor}`}>{total}</span> )
      </h4>
    </Heading>
  );
};
