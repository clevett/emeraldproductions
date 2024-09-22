import { EuiFlexGroup, EuiSwitch } from "@elastic/eui";
import { useRecoilState } from "recoil";
import { survivedAtom } from "./recoil";

export const SurvivedSwitch = () => {
  const [flag, setFlag] = useRecoilState(survivedAtom);

  return (
    <EuiFlexGroup
      className="flex-col content-center flex-wrap w-fill"
      gutterSize="l"
    >
      <EuiSwitch
        aria-describedby="character survived"
        checked={flag}
        label={"Character survived"}
        onChange={() => setFlag(!flag)}
      />
    </EuiFlexGroup>
  );
};
