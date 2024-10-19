import buttonStyles from "./Button.module.css";

export const Button = ({
  color = "bg-green-800",
  name,
  onClick,
  styles,
}: {
  color?: string;
  name: string;
  onClick: () => void;
  styles?: string;
}) => {
  return (
    <button
      aria-label={name}
      className={`cursor-pointer ${color} shadow-lg rounded p-2 ${buttonStyles.button} ${styles}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
