import { Card } from "@/components";
import { joinList } from "@/app/tools/utils";
import { NPC } from "@/data";

import styles from "./BackCard.module.css";

export const BackCard = ({
  npc,
  children,
}: {
  npc: NPC;
  children: JSX.Element;
}) => {
  return (
    <Card type="long">
      <div className={`grid ${styles.back} gap-2 py-1 px-2 cursor-pointer`}>
        <div className={`${styles.description} grid gap-2`}>
          <h4 className="text-2xl font-semibold">Description</h4>
          <p className="italic">{joinList(npc.alias)}</p>
          <p>{npc.description}</p>
          <p>Flaws: {joinList(npc.flaws)}</p>
          <p>Virtues: {joinList(npc.virtues)}</p>
          <p>Knowledge: {joinList(npc.knowledge)}</p>
          <p>Language: {joinList(npc.language)}</p>
        </div>
        {children}
      </div>
    </Card>
  );
};
