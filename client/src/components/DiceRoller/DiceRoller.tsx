import { LayoutBody } from "../LayoutBody";
import { useDiceRoller } from "./useDiceBox";
import { NotationInput } from "./NotationInput";
import { EuiLoadingSpinner, EuiSpacer, EuiTextColor } from "@elastic/eui";

export const DiceRoller = () => {
  const { roll, dicebox, canvas, result } = useDiceRoller();

  console.log(result);

  const message = "Type in the dice string and press Enter";

  return (
    <LayoutBody DriveThruId="155572" subtitle="" title="Dice Roller">
      {!dicebox ? (
        <EuiLoadingSpinner size="s" />
      ) : (
        <>
          <NotationInput submit={roll} />
          <EuiSpacer size="s" />
          <EuiTextColor color="subdued">{message}</EuiTextColor>
        </>
      )}

      {canvas}
    </LayoutBody>
  );
};
