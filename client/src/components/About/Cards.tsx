import { EuiCard, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

import iceland from "../../imgs/cards/iceland.jpg";
import gamemaster from "../../imgs/cards/npcs.png";
import dice from "../../imgs/cards/dice.png";

import styles from "./styles.module.css";

const cards = [
  {
    name: "Gamemaster",
    src: gamemaster,
    description:
      "Forever gamemaster who loves to play Pendragon, Shadow of the Demon Lord, Shadowrun, Symbaroum, Paranoia, and Mutant Year Zero.",
  },
  {
    name: "Software Developer",
    src: dice,
    description:
      "A software developer with 5+ years experience creating virtual table top software and role playing tools.",
  },
  {
    name: "Adventurer",
    src: iceland,
    description: "American living in Iceland.",
  },
];

const cardNodes = cards.map(function (c, index) {
  return (
    <EuiFlexItem key={`skill-card-${index}`}>
      <EuiCard
        image={c.src}
        title={c.name}
        description={c.description}
        onClick={() => {}}
        style={{ maxWidth: "550px", minHeight: "400px" }}
      />
    </EuiFlexItem>
  );
});

export const Cards = () => (
  <EuiFlexGroup className={styles.cards} gutterSize="l">
    {cardNodes}
  </EuiFlexGroup>
);
