"use client";
import { useAtomValue } from "jotai";

import { Options } from "@/data";

import { getEmployer, getLocation, getMacGuffin, getJob } from "../helpers";
import { missionAtomFamily } from "../state";

export const NaturalLanguage = () => {
  const location = useAtomValue(missionAtomFamily(Options.LOCATION));
  const employer = useAtomValue(missionAtomFamily(Options.EMPLOYER));
  const job = useAtomValue(missionAtomFamily(Options.JOB));
  const macguffin = useAtomValue(missionAtomFamily(Options.MACGUFFIN));
  const twist = useAtomValue(missionAtomFamily(Options.TWIST));

  if (!location || !employer || !job || !macguffin || !twist) {
    return null;
  }

  return (
    <div className="text-center w-100">
      <p className="mb-4">
        {getEmployer(employer)} meets you {getLocation(location)}. They hire you
        to perform {getJob(job)} job involving {getMacGuffin(macguffin)}.
      </p>
      <p className="italic">{`The twist is ${twist.description.toLowerCase()}.`}</p>
    </div>
  );
};
