import { EuiFlexGroup, EuiButton } from "@elastic/eui";
import { RecoilRoot, useRecoilCallback } from "recoil";

import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { MissionCard, NaturalLanguage } from "./components";
import { Options } from "../../data/srMissions";
import { missionAtomFamily } from "./recoil";

export const MissionGenerator = () => {
  const cardNodes = Object.values(Options).map((item, index) => {
    return <MissionCard key={index} item={item} />;
  });

  const resetOption = useRecoilCallback(
    ({ reset }) =>
      () => {
        Object.values(Options).forEach((o) => {
          console.log(o);
          reset(missionAtomFamily(o));
        });
      },
    []
  );

  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Mission Generator"
      title="Shadowrun"
    >
      <RecoilRoot>
        <EuiFlexGroup className="flex-col justify-start gap-4 mb-6 flex-wrap">
          <CardPanel>
            <NaturalLanguage />
            <EuiButton fill color="warning" onClick={resetOption}>
              Generate Mission
            </EuiButton>
          </CardPanel>
          <EuiFlexGroup className="flex-wrap" gutterSize="l">
            {cardNodes}
          </EuiFlexGroup>
        </EuiFlexGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
