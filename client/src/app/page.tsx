import Image from "next/image";
import { Text } from "@radix-ui/themes";
import { AboutCard, Heading } from "@/components";
import { about } from "@/resources";

import styles from "./styles.module.css";

import {
  takedown as portrait,
  iceland,
  npcs as gamemaster,
  dice,
  deltaGreen,
} from "@/images";

import type { Metadata } from "next";

export const metadata: Metadata = about;

const cards = [
  {
    title: "Gamemaster",
    src: gamemaster,
    description:
      "Forever gamemaster who loves to play Pendragon, Shadow of the Demon Lord, Shadowrun, Symbaroum, Paranoia, and Mutant Year Zero.",
  },
  {
    title: "Developer",
    src: dice,
    description: `A software developer with 8+ years experience creating virtual table top software and role playing tools.`,
  },
  {
    title: "Roll20 Expert",
    src: deltaGreen,
    description:
      "Helper to ttrpg publishers whose is assisting in getting their content online. I've led Roll20 product launches for Paizo, Chaosium, Hunter's Entertainment, Schwalb Entertainment, and more.",
  },
  {
    title: "Adventurer",
    src: iceland,
    description:
      "American living in Iceland. I love to travel and explore. Been to over 30 countries and counting.",
  },
];

const cardNodes = cards.map((props, index) => {
  return (
    <AboutCard key={`skill-card-${index}`} {...props} styles={styles.cards} />
  );
});

export default function Home() {
  return (
    <div className="grid gap-8 p-8">
      <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-8">
        <Image
          alt="A person with short hair wearing a jacket over a super hero costume looks to the sky"
          className={styles.portrait}
          src={portrait}
        />
        <div className="grid content-center gap-4 max-w-md">
          <Heading as="h2">Caden Levett</Heading>
          <Text as="p" size="3">
            Front-end developer specializing in software for table role playing
            games. I have an interest in accessibility, user experience, and
            project management. As a member of a team of engineers, I use my
            well-developed information organization and communications skills to
            compliment team members with a passion for technological solutions.
          </Text>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-8">{cardNodes}</div>
    </div>
  );
}
