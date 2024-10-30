import { useRecoilState } from "recoil";

import { Switch } from "@/app/components";
import { Nuyen } from "@/app/data";

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
