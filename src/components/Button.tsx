import { ButtonProps, Button as RadixButton } from "@radix-ui/themes";
import buttonStyles from "./Button.module.css";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <RadixButton
      className={`cursor-pointer shadow-lg rounded-md py-3 px-4 text-white text-base bg-green-950 ${
        buttonStyles.button
      } ${className ?? ""}`}
      {...props}
    >
      {children}
    </RadixButton>
  );
};
