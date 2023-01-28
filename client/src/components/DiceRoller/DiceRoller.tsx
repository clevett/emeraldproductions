import { LayoutBody } from "../LayoutBody";
import { useDiceRoller } from "./useDiceBox";
import { NotationInput } from "./NotationInput";
import {
  EuiButtonIcon,
  EuiLoadingSpinner,
  EuiSpacer,
  EuiTextColor,
} from "@elastic/eui";
import { DiceButtons } from "./DiceButtons";

export const DiceRoller = () => {
  const { roll, isLoading, canvas, clear, add } = useDiceRoller();
  const message = "Type in the dice string and press Enter";

  return (
    <LayoutBody DriveThruId="155572" subtitle="" title="Dice Roller">
      {isLoading ? (
        <EuiLoadingSpinner size="s" />
      ) : (
        <div className="grid">
          <DiceButtons roll={add} />
          <div className="w-full grid grid-cols-[400px_min-content] gap-6">
            <NotationInput submit={roll} />
            <EuiButtonIcon
              aria-label={`flip the card`}
              className="self-center"
              color="danger"
              iconType="trash"
              onClick={clear}
            />
          </div>
          <EuiSpacer size="s" />
          <EuiTextColor color="subdued">{message}</EuiTextColor>
        </div>
      )}
      {canvas}
    </LayoutBody>
  );
};
