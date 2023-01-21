import { EuiFieldText } from "@elastic/eui";
import { useState } from "react";

export const NotationInput = ({
  submit,
}: {
  submit: (arg: string) => void;
}) => {
  const [value, setValue] = useState("8d6");

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      submit(value);
    }
  };
  return (
    <EuiFieldText
      aria-label="Enter dice notation"
      className="w-full"
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      onSubmit={() => submit(value)}
      placeholder="8d6"
      value={value}
    />
  );
};
