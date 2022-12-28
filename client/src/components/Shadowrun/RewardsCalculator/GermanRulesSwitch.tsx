import { EuiFlexGroup, EuiSwitch } from "@elastic/eui";
import { useRecoilState } from "recoil";
import { germanFlagAtom } from "./recoil";

export const GermanRulesSwitch = () => {
  const [flag, setFlag] = useRecoilState(germanFlagAtom);

  return (
    <EuiFlexGroup
      className="flex-col content-center flex-wrap w-fill"
      gutterSize="l"
    >
      <EuiSwitch
        aria-describedby={
          "A karma is added for each of the Nuyen Situation Modifiers"
        }
        checked={flag}
        label="Use German ruleset"
        onChange={() => setFlag(!flag)}
        title="A karma is added for each of the Nuyen Situation Modifiers"
      />
    </EuiFlexGroup>
  );
};
