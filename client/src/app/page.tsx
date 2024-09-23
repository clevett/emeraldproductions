import Image from "next/image";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { Card } from "../components/Card";
import { Contact } from "../components/Contact";

import portrait from "../imgs/takedown.png";
import styles from "./styles.module.css";

import iceland from "../imgs/cards/iceland.jpg";
import gamemaster from "../imgs/cards/npcs.png";
import dice from "../imgs/cards/dice.png";

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
    title: "Adventurer",
    src: iceland,
    description: "American living in Iceland.",
  },
];

const cardNodes = cards.map((props, index) => {
  return <Card key={`skill-card-${index}`} {...props} styles={styles.cards} />;
});

export default function Home() {
  return (
    <Grid gap="6" className="p-4">
      <Flex gap="4" className="flex-row flex-wrap md:flex-nowrap">
        <Image
          alt="A person with short hair wearing a jacket over a super hero costume looks to the sky"
          className={styles.portrait}
          src={portrait}
        />
        <Box className="grow">
          <h2 className={styles.title}>Caden Levett</h2>
          <Text as="p" size="3">
            Front-end developer specializing in software for table role playing
            games. I have an interest in accessibility, user experience, and
            project management. As a member of a team of engineers, I use my
            well-developed information organization and communications skills to
            compliment team members with a passion for technological solutions.
          </Text>
        </Box>
      </Flex>
      <div className="flex justify-center lg:justify-between flex-wrap gap-4">
        {cardNodes}
      </div>
    </Grid>
  );
}
