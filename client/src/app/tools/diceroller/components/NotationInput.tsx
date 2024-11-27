import { Callout, Input } from "@/components";

export const NotationInput = ({
  submit,
}: {
  submit: (arg: string) => void;
}) => {
  const defaultRoll = "8d6!";
  const message = "Type in the dice string and press Enter";

  return (
    <div className="grid gap-4 max-w-md">
      <Input
        defaultValue={defaultRoll}
        label="Enter dice notation"
        placeholder={defaultRoll}
        submit={submit}
      />

      <Callout className="max-w-md">
        <span>{message}</span>
      </Callout>
    </div>
  );
};
