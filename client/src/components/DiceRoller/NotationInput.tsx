import { EuiFieldText } from "@elastic/eui";
import { useState } from "react";
import { EuiColorPicker, EuiFormRow, useColorPickerState } from "@elastic/eui";

export const NotationInput = ({
  submit,
}: {
  submit: (arg: string, color?: string) => void;
}) => {
  const defaultRoll = "8d6!";
  const [value, setValue] = useState(defaultRoll);
  const [color, setColor, errors] = useColorPickerState("#D36086");

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      submit(value, color);
    }
  };
  return (
    <>
      <EuiFieldText
        aria-label="Enter dice notation"
        className="w-full"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onSubmit={() => submit(value, color)}
        placeholder={defaultRoll}
        value={value}
      />
      <EuiFormRow label="Pick a color" isInvalid={!!errors} error={errors}>
        <EuiColorPicker
          onChange={setColor}
          color={color}
          isInvalid={!!errors}
        />
      </EuiFormRow>
    </>
  );
};
