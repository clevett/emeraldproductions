import { EuiSwitch } from "@elastic/eui";
import { useRecoilState } from "recoil";
import { Nuyen } from "./data/srRewards";
import { selectNuyenModifier } from "./recoil";

export const NuyenSwitch = ({ name, description }: Nuyen) => {
  const [flag, setFlag] = useRecoilState(selectNuyenModifier(name));

  console.table({ flag });

  return (
    <EuiSwitch
      aria-describedby={name}
      checked={flag}
      label={description}
      onChange={() => setFlag(!flag)}
    />
  );
};
