import { Card } from "../../Card/Card";
import { CardProps, joinList } from "./Card";
import styles from "./styles.module.css";

export const FrontCard = ({ npc, children }: CardProps) => {
  return (
    <Card>
      <div className={`${styles.header}`}>
        <img src={npc.img} alt={npc.name} />
      </div>
      <div className={`${styles.front} gap-2`}>
        <h4 className="text-2xl font-semibold">{npc.name}</h4>
        <p className={`text-lg italic ${styles.textEllipsis}`}>
          {joinList(npc.tags)}
        </p>
        <p className="text-lg">Connection: {npc.connection}</p>
        <p className="text-lg">Professional Rating: {npc.professional}</p>
        {children}
      </div>
    </Card>
  );
};
