import { Heading, HeadingProps } from "@radix-ui/themes";
export const Subtitle = ({
  children,
  ...props
}: HeadingProps & { children: string }) => {
  return (
    <Heading as="h2" size="4" {...props}>
      {children}
    </Heading>
  );
};
