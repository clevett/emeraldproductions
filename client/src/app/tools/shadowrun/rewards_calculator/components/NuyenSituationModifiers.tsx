import React from "react";

import { nuyen, Nuyen } from "@/data";
import { Heading } from "@/components";

import { NuyenSwitch } from "./NuyenSwitch";

export const NuyenSituationModifiers = () => {
  return (
    <div className="grid gap-4">
      <Heading as="h4" className="text-center">
        Nuyen Situation Modifiers
      </Heading>
      {nuyen.map((e: Nuyen) => (
        <React.Fragment key={`${e.name}`}>
          <NuyenSwitch {...e} />
        </React.Fragment>
      ))}
    </div>
  );
};
