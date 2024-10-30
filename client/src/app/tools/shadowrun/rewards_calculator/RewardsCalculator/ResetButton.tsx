import { EuiButton } from "@elastic/eui";
import { useRecoilCallback } from "recoil";
import { nuyen } from "../../../../data/srRewards";
import {
  diceKarmaAtom,
  diceNuyenAtom,
  germanFlagAtom,
  nuyenBaseAtom,
  nuyenModifierPercentAtom,
  nuyenModifiersAtomFamily,
  objectiveKarmaAtom,
  opposedDicePoolAtom,
  runTypeAtom,
  survivedAtom,
} from "./recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ reset }) =>
      () => {
        reset(runTypeAtom);
        reset(opposedDicePoolAtom);
        reset(diceKarmaAtom);
        reset(diceNuyenAtom);
        reset(nuyenBaseAtom);
        reset(germanFlagAtom);
        reset(survivedAtom);
        reset(objectiveKarmaAtom);
        reset(nuyenModifierPercentAtom);
        nuyen.forEach((n) => reset(nuyenModifiersAtomFamily(n.name)));
      },
    []
  );

  return (
    <EuiButton className="w-fit" color="warning" onClick={() => resetOptions()}>
      Reset Rewards
    </EuiButton>
  );
};
