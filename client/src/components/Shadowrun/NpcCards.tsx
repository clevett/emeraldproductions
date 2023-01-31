import { EuiFlexGroup } from "@elastic/eui";
import { LayoutBody } from "../LayoutBody";
import { NpcCard } from "./Npc/Card";
import { npcs } from "./Npc/data/npcs";

export const NpcCards = () => {
  return (
    <LayoutBody
      DriveThruId="286850"
      subtitle="Npcs"
      title="Shadowrun 6th Edition"
    >
      <EuiFlexGroup className="flex-col justify-center gap-4 flex-wrap">
        {npcs.map((e, index) => (
          <NpcCard key={`npc-card-${index}`} npc={e} />
        ))}
      </EuiFlexGroup>
    </LayoutBody>
  );
};
