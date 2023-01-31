import { EuiFieldText } from "@elastic/eui";
import { useState } from "react";

export const NotationInput = ({
  submit,
}: {
  submit: (arg: string, color?: string) => void;
}) => {
  const defaultRoll = "8d6!";
  const [value, setValue] = useState(defaultRoll);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      submit(value);
    }
  };
  return (
    <>
      <EuiFieldText
        aria-label="Enter dice notation"
        className="w-full"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onSubmit={() => submit(value)}
        placeholder={defaultRoll}
        value={value}
      />
    </>
  );
};
