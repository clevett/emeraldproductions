import { useAtom } from "jotai";
import { germanFlagAtom } from "../state";
import { Switch } from "@/components";

export const GermanRulesSwitch = () => {
  const [flag, setFlag] = useAtom(germanFlagAtom);

  return (
    <Switch
      aria-describedby={
        "A karma is added for each of the Nuyen Situation Modifiers"
      }
      defaultChecked={flag}
      label="Use German ruleset (+1 Karma for each Nuyen Situation Modifier)"
      onChange={() => setFlag(!flag)}
    />
  );
};
