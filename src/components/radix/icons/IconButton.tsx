import {
  IconButtonProps,
  IconButton as RadixIconButton,
} from "@radix-ui/themes";

export const IconButton = ({
  children,
  className,
  onClick,
  variant = "ghost",
  ...props
}: {
  children: JSX.Element;
  variant?: IconButtonProps["variant"];
} & IconButtonProps) => {
  return (
    <RadixIconButton
      className={`cursor-pointer ${className ?? ""}`}
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {children}
    </RadixIconButton>
  );
};
