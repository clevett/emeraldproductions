import { useRecoilState } from "recoil";
import { survivedAtom } from "../recoil";
import { Switch } from "@/app/components";

export const SurvivedSwitch = () => {
  const [flag, setFlag] = useRecoilState(survivedAtom);

  return (
    <Switch
      aria-describedby="character survived"
      defaultChecked={flag}
      label="Character survived (+2 karma)"
      onChange={() => setFlag(!flag)}
    />
  );
};
