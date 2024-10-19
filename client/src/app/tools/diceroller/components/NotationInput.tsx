import { Text } from "@radix-ui/themes";

import { Input } from "@/app/components";

export const NotationInput = ({
  submit,
}: {
  submit: (arg: string) => void;
}) => {
  const defaultRoll = "8d6!";
  const message = "Type in the dice string and press Enter";

  return (
    <div className="grid gap-4">
      <Input
        defaultValue={defaultRoll}
        label="Enter dice notation"
        placeholder={defaultRoll}
        submit={submit}
      />

      <Text as="label" size="3">
        {message}
      </Text>
    </div>
  );
};
