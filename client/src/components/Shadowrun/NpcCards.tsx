import { EuiFlexGroup } from "@elastic/eui";
import { LayoutBody } from "../LayoutBody";
import { Card } from "./Npc/Card";
import { npcs } from "./Npc/data/npcs";

export const NpcCards = () => {
  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Npcs"
      title="Shadowrun 6th Edition"
    >
      <EuiFlexGroup gutterSize="l">
        {npcs.map((e, index) => (
          <Card key={`npc-card-${index}`} npc={e} />
        ))}
      </EuiFlexGroup>
    </LayoutBody>
  );
};
