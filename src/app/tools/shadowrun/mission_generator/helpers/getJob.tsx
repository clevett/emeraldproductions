import { isVowel } from "./isVowel";
import { getRandomArrayElement } from "@/app/tools/utils";
import { MissionElement } from "@/data";

export const getJob = (job: MissionElement) => {
  const result = job.result[0];
  let description = job.description.toLowerCase();

  const orSplit = (s: string) => getRandomArrayElement(s.split(" or "));

  if (result === 2 || result === 3) {
    description = orSplit(description);
  }

  const article = isVowel(description) ? "an" : "a";
  return (
    <span>
      {article} {description}
    </span>
  );
};
