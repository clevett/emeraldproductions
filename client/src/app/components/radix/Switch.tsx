import { Switch as RadixSwitch, Text, Flex } from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/dist/esm/props/prop-def.js";

type TextSize =
  | Responsive<"2" | "3" | "1" | "4" | "5" | "6" | "7" | "8" | "9">
  | undefined;

type Size = Responsive<"2" | "3" | "1"> | undefined;

export const Switch = ({
  checked,
  defaultChecked = false,
  label,
  onChange,
  size = "2",
  textSize = "3",
}: {
  checked?: boolean;
  defaultChecked?: boolean;
  label: string;
  onChange?: () => void;
  size?: Size;
  textSize?: TextSize;
}) => {
  return (
    <Text as="label" size={textSize}>
      <Flex gap="2">
        <RadixSwitch
          defaultChecked={defaultChecked}
          onCheckedChange={onChange}
          size={size}
          checked={!!checked}
          highContrast
        />
        {label}
      </Flex>
    </Text>
  );
};
