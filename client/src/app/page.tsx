import Image from "next/image";
import { Flex, Grid } from "@radix-ui/themes";

import portrait from "../imgs/takedown.png";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <Grid>
      <Flex gap="4">
        <Image
          className={styles.portrait}
          src={portrait}
          alt="A person with short hair wearing a jacket over a super hero costume looks to the sky"
        />
        <div>
          <h2 className={styles.title}>Caden Levett</h2>
          <p>
            Front-end developer specializing in software for table role playing
            games. I have an interest in accessibility, user experience, and
            project management. As a member of a team of engineers, I use my
            well-developed information organization and communications skills to
            compliment team members with a passion for technological solutions.
          </p>
        </div>
      </Flex>
    </Grid>
  );
}
