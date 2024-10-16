import { Heading, HeadingProps } from "@radix-ui/themes";
export const Title = ({
  children,
  ...props
}: HeadingProps & { children: string }) => {
  return (
    <Heading size="6" {...props}>
      {children}
    </Heading>
  );
};
