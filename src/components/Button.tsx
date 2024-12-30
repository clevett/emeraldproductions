import { ButtonProps, Button as RadixButton } from "@radix-ui/themes";
import buttonStyles from "./Button.module.css";

export const Button = ({
  children,
  className,
  ...props
}: {
  color?: string;
} & ButtonProps) => {
  return (
    <RadixButton
      className={`cursor-pointer shadow-lg rounded py-1 px-2 bg-green-800 ${
        buttonStyles.button
      } ${className ?? ""}`}
      {...props}
    >
      {children}
    </RadixButton>
  );
};
