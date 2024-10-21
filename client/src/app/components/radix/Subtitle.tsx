import { HeadingProps } from "@radix-ui/themes";
import { Heading } from "./Heading";

export const Subtitle = ({
  children,
  ...props
}: HeadingProps & { children: string }) => {
  return (
    <Heading as="h2" {...props}>
      {children}
    </Heading>
  );
};
