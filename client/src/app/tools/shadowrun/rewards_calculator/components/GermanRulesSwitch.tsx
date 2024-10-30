import { useRecoilState } from "recoil";
import { germanFlagAtom } from "../recoil";
import { Switch } from "@/app/components";

export const GermanRulesSwitch = () => {
  const [flag, setFlag] = useRecoilState(germanFlagAtom);

  return (
    <div className="grid gap-4">
      <Switch
        aria-describedby={
          "A karma is added for each of the Nuyen Situation Modifiers"
        }
        defaultChecked={flag}
        label="Use German ruleset (+1 Karma for each Nuyen Situation Modifier)"
        onChange={() => setFlag(!flag)}
      />
    </div>
  );
};
