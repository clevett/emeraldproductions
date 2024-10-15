import { TextField, Text } from "@radix-ui/themes";
import { useState } from "react";

export const NotationInput = ({
  submit,
}: {
  submit: (arg: string, color?: string) => void;
}) => {
  const defaultRoll = "8d6!";
  const [value, setValue] = useState(defaultRoll);

  const message = "Type in the dice string and press Enter";

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      submit(value);
    }
  };
  return (
    <div className="grid gap-4">
      <TextField.Root
        placeholder={defaultRoll}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onSubmit={() => submit(value)}
        aria-label="Enter dice notation"
        className="w-full"
      />
      <Text as="label" size="3">
        {message}
      </Text>
    </div>
  );
};
