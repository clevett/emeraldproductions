import { useAtom } from "jotai";

import { Switch } from "@/components";
import { Nuyen } from "@/data";

import { selectNuyenModifier } from "../state";

export const NuyenSwitch = ({ name, description }: Nuyen) => {
  const [flag, setFlag] = useAtom(selectNuyenModifier(name));

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
