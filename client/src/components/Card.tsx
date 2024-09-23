import { Box, Card as RadixCard, Inset, Text, Strong } from "@radix-ui/themes";
import image from "next/image";
import Image, { StaticImageData } from "next/image";
import { title } from "process";

type CardProps = {
  description: string;
  src: StaticImageData;
  styles?: string;
  title: string;
};

export const Card = ({ src, title, description, styles }: CardProps) => {
  return (
    <Box
      className={`shadow-lg rounded-md grow ${styles}`}
      maxWidth="500px"
      minHeight="300px"
    >
      <RadixCard className="h-full w-full" size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src={src}
            alt="A person with short hair wearing a jacket over a super hero costume looks to the sky"
            style={{
              backgroundColor: "var(--gray-5)",
              display: "block",
              height: 200,
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Inset>
        <Box>
          <Text as="label" size="4">
            <Strong>{title}</Strong>
          </Text>
        </Box>
        <Text as="p" size="3">
          {description}
        </Text>
      </RadixCard>
    </Box>
  );
};
