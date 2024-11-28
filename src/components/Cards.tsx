import Link from "next/link";
import { Card, Heading } from "@/components";
import { List } from "@/types";

export const Cards = ({ list }: { list: List[] }) => {
  return (
    <div className="flex flex-wrap align-top justify-center auto-rows-min flex-row gap-6 sm:gap-8">
      {list.map(({ path, label, description }) => (
        <Link href={`${path}`} key={`game-card-${label.replace(/\s+/g, "")}`}>
          <Card
            styles="grid gap-4 align-top auto-rows-min py-2 px-4 sm:py-4 sm:px-6"
            type="business"
          >
            <Heading as="h3" className="text-center">
              {label}
            </Heading>
            <p>{description}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
};
