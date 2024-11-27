import { useRecoilState } from "recoil";

import { Switch } from "@/components";
import { Nuyen } from "@/data";

import { selectNuyenModifier } from "../recoil";

export const NuyenSwitch = ({ name, description }: Nuyen) => {
  const [flag, setFlag] = useRecoilState(selectNuyenModifier(name));

  return (
    <Switch
      aria-describedby={name}
      checked={flag}
      defaultChecked={flag}
      label={description}
      onChange={() => setFlag(!flag)}
    />
  );
};
