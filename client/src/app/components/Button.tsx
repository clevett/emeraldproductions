import { Button as RadixButton } from "@radix-ui/themes";
import buttonStyles from "./Button.module.css";

export const Button = ({
  color = "bg-green-800",
  name,
  onClick,
  styles,
  icon,
}: {
  color?: string;
  name: string;
  onClick: () => void;
  styles?: string;
  icon?: React.ReactNode;
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
    </RadixButton>
  );
};
