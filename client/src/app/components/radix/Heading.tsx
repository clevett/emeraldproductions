import { HeadingProps, Heading as RadixHeading } from "@radix-ui/themes";

export const Heading = ({
  as,
  children,
  size,
  className,
  truncate = true,
  weight = "bold",
}: HeadingProps & {
  children?: React.ReactNode;
  className?: string;
}) => {
  let defaultSize: HeadingProps["size"];
  switch (as) {
    case "h1":
      defaultSize = "7";
      break;
    case "h2":
      defaultSize = "6";
      break;
    case "h3":
      defaultSize = "5";
      break;
    case "h4":
      defaultSize = "4";
      break;
    case "h5":
      defaultSize = "3";
      break;
    case "h6":
      defaultSize = "2";
      break;
    default:
      defaultSize = "1";
  }

  return (
    <RadixHeading
      as={as}
      className={className}
      size={size ?? defaultSize}
      truncate={truncate}
      weight={weight}
    >
      {children}
    </RadixHeading>
  );
};
