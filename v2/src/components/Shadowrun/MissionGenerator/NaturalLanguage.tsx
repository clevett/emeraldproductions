import { useRecoilValue } from "recoil";

import { getEmployer, getLocation, getMacGuffin, getJob } from "./helpers";
import { Options } from "./data/srMissions";
import { missionAtomFamily } from "./recoil";

export const NaturalLanguage = () => {
  const location = useRecoilValue(missionAtomFamily(Options.LOCATION));
  const employer = useRecoilValue(missionAtomFamily(Options.EMPLOYER));
  const job = useRecoilValue(missionAtomFamily(Options.JOB));
  const macguffin = useRecoilValue(missionAtomFamily(Options.MACGUFFIN));
  const twist = useRecoilValue(missionAtomFamily(Options.TWIST));

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
