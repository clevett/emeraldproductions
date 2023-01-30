import { Card } from "../../Card/Card";
import { CardProps, joinList } from "./Card";

import styles from "./styles.module.css";

export const BackCard = ({ npc, children }: CardProps) => {
  return (
    <Card>
      <div className={`grid ${styles.back} gap-2`}>
        <div className={`${styles.description} gap-2`}>
          <h4 className="text-2xl font-semibold">Description</h4>
          <p className={`text-lg italic`}>{joinList(npc.alias)}</p>
          <p className="text-lg">{npc.description}</p>
          <p className={`text-lg`}>Flaws: {joinList(npc.flaws)}</p>
          <p className={`text-lg`}>Virtues: {joinList(npc.virtues)}</p>
          <p className={`text-lg`}>Knowledge: {joinList(npc.knowledge)}</p>
          <p className={`text-lg`}>Language: {joinList(npc.language)}</p>
        </div>
        {children}
      </div>
    </Card>
  );
};
