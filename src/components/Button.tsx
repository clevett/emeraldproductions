import { Button as RadixButton } from "@radix-ui/themes";
import buttonStyles from "./Button.module.css";

export const Button = ({
  children,
  color = "bg-green-800",
  icon,
  name,
  onClick,
  styles,
}: {
  children?: React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
  name?: string;
  onClick: () => void;
  styles?: string;
}) => {
  return (
    <RadixButton
      aria-label={name}
      className={`cursor-pointer ${color} shadow-lg rounded py-1 px-2 ${
        buttonStyles.button
      } ${styles ?? ""}`}
      onClick={onClick}
    >
      {icon}
      {name}
      {children}
    </RadixButton>
  );
};
