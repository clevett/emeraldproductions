import { EuiFlexGroup, EuiButton } from "@elastic/eui";
import { RecoilRoot, useRecoilCallback, useResetRecoilState } from "recoil";

import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { MissionCard, NaturalLanguage } from "./components";
import { Options } from "../../data/srMissions";
import { missionAtomFamily, selectOperationFamily } from "./recoil";
import { getOption } from "./helpers";

export const MissionGenerator = () => {
  const cardNodes = Object.values(Options).map((item, index) => {
    return <MissionCard key={index} item={item} />;
  });

  const reset = useResetRecoilState(selectOperationFamily);

  // const resetOptions = useRecoilCallback(
  //   ({ set }) =>
  //     () => {
  //       Object.values(Options).forEach((o) => {
  //         const value = getOption(o);
  //         console.table({
  //           o,
  //           value: value?.description,
  //         });
  //         set(missionAtomFamily(o), value);
  //       });
  //     },
  //   []
  // );

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
            <EuiButton fill color="warning" onClick={() => reset()}>
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
