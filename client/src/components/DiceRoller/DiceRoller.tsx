import { EuiButtonIcon, EuiLoadingSpinner, EuiTextColor } from "@elastic/eui";
import { LayoutBody } from "../LayoutBody";
import { DiceButtons } from "./DiceButtons";
import { NotationInput } from "./NotationInput";
import { useDiceRoller } from "./useDiceBox";
import { HuePicker } from "react-color";

export const DiceRoller = () => {
  const { roll, isLoading, canvas, clear, setColor, color } = useDiceRoller();
  const message = "Type in the dice string and press Enter";

  const rollDice = (notation: string) => roll(notation, color);

  return (
    <LayoutBody DriveThruId="155572" subtitle="" title="Dice Roller">
      <>
        {isLoading ? (
          <EuiLoadingSpinner size="s" />
        ) : (
          <div className="w-full grid grid-cols-[400px_min-content] gap-4">
            <DiceButtons roll={rollDice} />
            <EuiButtonIcon
              aria-label="flip the card"
              className="self-center"
              color="danger"
              iconType="trash"
              onClick={clear}
            />

            <div className="w-full grid gap-2">
              <NotationInput submit={rollDice} />
              <EuiTextColor color="subdued">{message}</EuiTextColor>
              <HuePicker onChange={(e) => setColor(e.hex)} color={color} />
            </div>
          </div>
        )}
        {canvas}
      </>
    </LayoutBody>
  );
};
