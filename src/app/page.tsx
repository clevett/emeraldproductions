import type { Metadata } from "next";
import Image from "next/image";
import { Text } from "@radix-ui/themes";

import { AboutCard, Heading, Bookshelf } from "@/components";
import { about, cards } from "@/resources";
import { takedown as portrait } from "@/images";

import styles from "./styles.module.css";

export const metadata: Metadata = about;

const cardNodes = cards.map((props, index) => {
  return (
    <AboutCard key={`skill-card-${index}`} {...props} styles={styles.cards} />
  );
});

export default function Home() {
  return (
    <div className="grid gap-8 p-8 lg:gap-32">
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
      <div className="grid justify-center gap-8">
        <Bookshelf />
      </div>
    </div>
  );
}
