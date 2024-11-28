import cardStyles from "./Card.module.css";

const types = {
  auto: "w-auto h-auto",
  long: "w-[350px] h-auto sm:w-[350px] sm:h-[560px] sm:max-w-[350px] sm:min-h-[560px]",
  wide: "w-[560px] h-auto sm:w-[560px] sm:h-[350px] sm:max-w-[560px] sm:min-h-[350px]",
  business:
    "w-[350px] h-auto sm:w-[500px] sm:h-[250px] sm:max-w-[500px] sm:min-h-[250px]",
};

export const Card = ({
  children,
  styles,
  type = "auto",
}: {
  children: JSX.Element | null | (JSX.Element | null)[];
  styles?: string;
  type?: keyof typeof types;
}) => {
  const sizes = types[type];

  return (
    <div
      className={`rounded ${cardStyles.card} ${sizes} ${
        styles ? styles : ""
      }  `}
    >
      {children}
    </div>
  );
};
