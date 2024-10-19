import {
  IconButtonProps,
  IconButton as RadixIconButton,
} from "@radix-ui/themes";

export const IconButton = ({
  children,
  onClick,
  styles,
  variant = "ghost",
  label,
}: {
  label: string;
  children: JSX.Element;
  onClick: () => void;
  styles?: string;
  variant?: IconButtonProps["variant"];
}) => {
  return (
    <RadixIconButton
      aria-label={label}
      className={styles}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </RadixIconButton>
  );
};
