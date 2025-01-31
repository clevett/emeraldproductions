import type { Metadata } from "next";
import Image from "next/image";
import { Text } from "@radix-ui/themes";

import { AboutCard, Heading, Bookshelf, HoverCard } from "@/components";
import { about, cards, media } from "@/resources";
import { takedown as portrait } from "@/images";

import styles from "./styles.module.css";
import Link from "next/link";

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
            empower team members with a passion for technological solutions.
          </Text>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-8">{cardNodes}</div>

      <div className="grid justify-center gap-8">
        <Bookshelf />
      </div>

      <div className="grid justify-center gap-8">
        <div className="flex flex-col flex-wrap gap-5 lg:gap-2">
          <Heading className="text-center" as="h3">
            Podcasts / Media / Creator
          </Heading>
          <ul className="flex flex-row flex-wrap justify-center gap-5 lg:gap-2">
            {media.map(
              ({ title, description, src, icon }: (typeof media)[0], index) => (
                <li
                  className="relative overflow-hidden group transition-all ring-accent rounded shadow-md block hover:ring-1 hover:border-sky-500 hover:border"
                  key={`media-content-${index}`}
                >
                  <HoverCard
                    content={
                      <div>
                        <Heading className="bold text-wrap break-words" as="h4">
                          {title}
                        </Heading>
                        <p className="opacity-80">{description}</p>
                      </div>
                    }
                    trigger={
                      <Link href={src} target="_blank">
                        <Image
                          className="rounded-l-sm rounded-r-md h-full"
                          alt={title}
                          src={icon}
                          height={100}
                          width={200}
                        />
                      </Link>
                    }
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
