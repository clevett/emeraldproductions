import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout as RadixCallout } from "@radix-ui/themes";

export const Callout = ({
  color = "blue",
  icon = <InfoCircledIcon />,
  children,
}: RadixCallout.RootProps & {
  icon?: JSX.Element;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <RadixCallout.Root color={color}>
      <RadixCallout.Icon>{icon}</RadixCallout.Icon>
      <RadixCallout.Text>{children}</RadixCallout.Text>
    </RadixCallout.Root>
  );
};
