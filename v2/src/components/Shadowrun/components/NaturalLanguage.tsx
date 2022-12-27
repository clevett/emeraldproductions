// import Location from "./Location/Location";
// import Employer from "./Employer/Employer";
// import Job from "./Job/Job";
// import MacGuffin from "./MacGuffin/MacGuffin";
import { MissionElement } from "../../../data/srMissions";

type NaturalLanguageProps = {
  employer?: MissionElement;
  job?: MissionElement;
  location?: MissionElement;
  macguffin?: MissionElement;
  twist?: MissionElement;
};

export const NaturalLanguage = ({
  employer,
  location,
  job,
  macguffin,
  twist,
}: NaturalLanguageProps) => {
  const lowerCase = (s: string) => s.toLowerCase();

  const l = location;
  const e = employer;
  const j = job;
  const m = macguffin;
  const t = twist;

  // const l =
  //   location.result &&
  //   Location(location.result[0], lowerCase(`${location.description}`));
  // const e =
  //   employer.result &&
  //   Employer(employer.result[0], lowerCase(`${employer.description}`));
  // const j = job.result && Job(job.result[0], lowerCase(`${job.description}`));
  // const m =
  //   macguffin.result &&
  //   MacGuffin(macguffin.result[0], lowerCase(`${macguffin.description}`));
  // const t = (twist = lowerCase(`${twist.description}`));

  return (
    <div className="text-center w-100">
      <p className="mb-4">
        {`${e} meets you ${l}. They hire you to perform ${j} job involving ${m}.`}
      </p>
      <p className="italic">{`The twist is ${t}.`}</p>
    </div>
  );
};
