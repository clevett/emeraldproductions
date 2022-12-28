import { EuiSwitch } from "@elastic/eui";
import { useRecoilState } from "recoil";
import { Nuyen } from "./data/srRewards";
import { nuyenModifiersAtomFamily } from "../RewardsCalculator/recoil";

export const NuyenSwitch = ({ name, description }: Nuyen) => {
  const [flag, setFlag] = useRecoilState(nuyenModifiersAtomFamily(name));
  return (
    <EuiSwitch
      aria-describedby={name}
      checked={flag}
      label={description}
      onChange={() => setFlag(!flag)}
    />
  );
};
