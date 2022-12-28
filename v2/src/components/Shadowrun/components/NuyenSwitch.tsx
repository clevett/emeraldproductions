import { EuiSwitch } from "@elastic/eui";
import { useRecoilState } from "recoil";
import { Nuyen } from "../../../data/srRewards";
import { rewardsAtomFamily } from "../recoil";

export const NuyenSwitch = ({ name, description }: Nuyen) => {
  const [flag, setFlag] = useRecoilState(rewardsAtomFamily(name));
  return (
    <EuiSwitch
      aria-describedby={name}
      checked={flag}
      label={description}
      onChange={() => setFlag(!flag)}
    />
  );
};
