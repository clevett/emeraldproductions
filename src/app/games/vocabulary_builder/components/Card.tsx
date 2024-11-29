export const Card = ({
  children,
  customStyle,
}: {
  children: JSX.Element | null | (JSX.Element | null)[];
  customStyle?: string;
  isActive?: boolean;
}) => {
  const backgroundColor = "bg-gray-700";

  const cardStyles = `
    flex items-center justify-center bg-gray-800 rounded-lg border border-transparent 
    text-3xl h-36 min-w-[300px] overflow-hidden text-center whitespace-pre-wrap w-full 
    break-words shadow-[0_0.9px_4px_rgba(0,0,0,0.28),0_2.6px_8px_rgba(0,0,0,0.21),0_5.7px_12px_rgba(0,0,0,0.18),0_15px_15px_rgba(0,0,0,0.14)]
  `;

  return (
    <div className={`${cardStyles} ${backgroundColor} ${customStyle}`}>
      {children}
    </div>
  );
};
