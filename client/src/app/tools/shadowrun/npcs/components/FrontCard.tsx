import Image from "next/image";

import { Card } from "@/components";
import { joinList } from "@/utils";
import { NPC } from "@/data";

import styles from "./FrontCard.module.css";

export const FrontCard = ({
  npc,
  children,
}: {
  npc: NPC;
  children: JSX.Element;
}) => {
  return (
    <Card type="long">
      <div className={`${styles.header}`}>
        <Image src={npc.img} alt={npc.name} />
      </div>
      <div className="grid gap-2 cursor-pointer py-1 px-2">
        <h4 className="text-2xl font-semibold">{npc.name}</h4>
        <p className="italic text-ellipsis">{joinList(npc.tags)}</p>
        <p>Connection: {npc.connection}</p>
        <p>Professional Rating: {npc.professional}</p>
        {children}
      </div>
    </Card>
  );
};
