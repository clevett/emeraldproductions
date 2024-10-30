import { getRandomArrayElement } from "@/app/tools/utils";
import { MissionElement } from "@/app/data";
import { isVowel } from "./isVowel";

const splitEmployer = (string: string) => {
  const array = string.split(" or ");

  if (array[1].includes(" ")) {
    return [`${array.shift()} ${array[0].split(" ")[1]}`, ...array];
  } else {
    return [`${array[0].split(" ")[0]} ${array.pop()}`, ...array];
  }
};

export const getEmployer = (employer: MissionElement) => {
  const result = employer.result[0];
  let description = employer.description.toLowerCase();

  if (result === 12 || result === 3 || result === 4) {
    description = getRandomArrayElement(splitEmployer(description));
  }
  const article = isVowel(description) ? "An " : "A ";
  if (result === 5) {
    return (
      <span>
        {article}
        <a
          href="https://rpgenerator.net/shadowrun/corporations"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </span>
    );
  } else {
    return (
      <span>
        {article} {description}
      </span>
    );
  }
};
