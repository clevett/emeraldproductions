import buttonStyles from "./Button.module.css";

export const Button = ({
  name,
  onClick,
  styles,
}: {
  name: string;
  onClick: () => void;
  styles?: string;
}) => {
  return (
    <button
      aria-label={name}
      className={`cursor-pointer bg-green-800 rounded p-2 ${buttonStyles.button} ${styles}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
