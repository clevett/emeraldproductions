import { isVowel } from "./isVowel";
import { MissionElement } from "@/data";
import { getRandomArrayElement } from "@/utils";

const splitMacguffin = (description: string) => {
  const split = description.split(", ");
  const removeOr = split?.pop()?.split("or ")[1];
  return [...split, removeOr];
};

export const getMacGuffin = (macguffin: MissionElement) => {
  const result = macguffin.result[0];
  let description = macguffin.description.toLowerCase();

  if (result === 6) {
    description = getRandomArrayElement(splitMacguffin(description)) ?? "";
  }

  if (result === 1 || result === 2) {
    if (result === 1) {
      return (
        <a
          href="https://rpgenerator.net/cyberpunk/by-sovereignity"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      );
    } else {
      return <span>{description}</span>;
    }
  } else {
    const article = isVowel(description) ? "an" : "a";
    return (
      <span>
        {article} {description}
      </span>
    );
  }
};
