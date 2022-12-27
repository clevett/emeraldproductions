import { EuiFlexGroup, EuiSpacer, EuiTitle } from "@elastic/eui";
import { nuyen, Nuyen } from "../../../data/srRewards";
import { NuyenSwitch } from "./NuyenSwitch";

export const NuyenSituationModifiers = () => {
  return (
    <EuiFlexGroup
      className="flex-col content-center flex-wrap w-fill"
      gutterSize="l"
    >
      <EuiTitle className="text-center" size="s">
        <h5>Nuyen Situation Modifiers</h5>
      </EuiTitle>
      {nuyen.map((e: Nuyen) => (
        <>
          <EuiSpacer size="m" />
          <NuyenSwitch {...e} />
        </>
      ))}
    </EuiFlexGroup>
  );
};
