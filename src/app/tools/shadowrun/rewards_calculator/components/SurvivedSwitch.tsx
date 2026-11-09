import { useAtom } from "jotai";
import { survivedAtom } from "../state";
import { Switch } from "@/components";

export const SurvivedSwitch = () => {
  const [flag, setFlag] = useAtom(survivedAtom);

  return (
    <Switch
      aria-describedby="character survived"
      defaultChecked={flag}
      label="Character survived (+2 karma)"
      onChange={() => setFlag(!flag)}
    />
  );
};
