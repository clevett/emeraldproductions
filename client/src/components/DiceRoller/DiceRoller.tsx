import { EuiButtonIcon, EuiLoadingSpinner, EuiTextColor } from "@elastic/eui";
import { LayoutBody } from "../LayoutBody";
import { DiceButtons } from "./DiceButtons";
import { NotationInput } from "./NotationInput";
import { useDiceRoller } from "./useDiceBox";

export const DiceRoller = () => {
  const { roll, isLoading, canvas, clear, add } = useDiceRoller();
  const message = "Type in the dice string and press Enter";
  return (
    <LayoutBody DriveThruId="155572" subtitle="" title="Dice Roller">
      <>
        {isLoading ? (
          <EuiLoadingSpinner size="s" />
        ) : (
          <div className="w-full grid grid-cols-[400px_min-content] gap-4">
            <DiceButtons roll={add} />
            <EuiButtonIcon
              aria-label={`flip the card`}
              className="self-center"
              color="danger"
              iconType="trash"
              onClick={clear}
            />

            <div className="w-full grid gap-2">
              <NotationInput submit={roll} />
              <EuiTextColor color="subdued">{message}</EuiTextColor>
            </div>
          </div>
        )}
        {canvas}
      </>
    </LayoutBody>
  );
};
