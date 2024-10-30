import { Callout, Input } from "@/app/components";

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

      <Callout>
        <span>{message}</span>
      </Callout>
    </div>
  );
};
