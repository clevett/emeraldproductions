import { MissionElement } from "@/data";

export const getLocation = (location: MissionElement) => {
  const result = location.result[0];
  const description = location.description.toLowerCase();

  if (result === 1) {
    return (
      <span>
        at a{" "}
        <a
          href="https://rpgenerator.net/shadowrun/food"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </span>
    );
  } else if (result === 6) {
    return <span>in {description}</span>;
  } else {
    return <span>in a {description}</span>;
  }
};
