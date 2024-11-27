import { HeadingProps } from "@radix-ui/themes";
import { Heading } from "./Heading";
export const Title = ({
  children,
  ...props
}: HeadingProps & { children: string }) => {
  return (
    <Heading as="h1" {...props}>
      {children}
    </Heading>
  );
};
