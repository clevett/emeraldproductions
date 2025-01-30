import { HoverCard as HoverCardRadix, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

export const HoverCard = ({
  content,
  trigger,
}: {
  content: ReactNode;
  trigger: ReactNode;
}) => {
  return (
    <HoverCardRadix.Root>
      <HoverCardRadix.Trigger>{trigger}</HoverCardRadix.Trigger>
      <HoverCardRadix.Content maxWidth="300px">
        <Flex gap="4">{content}</Flex>
      </HoverCardRadix.Content>
    </HoverCardRadix.Root>
  );
};
