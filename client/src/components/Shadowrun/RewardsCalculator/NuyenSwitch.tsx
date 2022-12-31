import { EuiSwitch } from "@elastic/eui";
import { useRecoilState } from "recoil";
import { Nuyen } from "./data/srRewards";
import { selectNuyenModifier } from "./recoil";

export const NuyenSwitch = ({ name, description }: Nuyen) => {
  const [flag, setFlag] = useRecoilState(selectNuyenModifier(name));

  return (
    <EuiSwitch
      className="text-left"
      aria-describedby={name}
      checked={flag}
      label={description}
      onChange={() => setFlag(!flag)}
    />
  );
};
