import { Flex, RadioCards as RadioCardsRadix } from "@radix-ui/themes";
import { Heading } from "./Heading";

export const RadioCards = ({
  className,
  columns = "3",
  defaultValue,
  list,
  onChange,
}: {
  className?: string;
  columns?: string;
  defaultValue: string;
  list: { heading: string; description: string }[];
  onChange: (value: string) => void;
}) => {
  return (
    <RadioCardsRadix.Root
      className={`flex flex-wrap justify-center ${className}`}
      columns={{ initial: defaultValue, sm: columns }}
      defaultValue={defaultValue}
      highContrast
      onValueChange={(value) => onChange(value)}
    >
      {list.map((item, index) => (
        <RadioCardsRadix.Item key={index} value={item.heading}>
          <Flex className="gap-2  sm:gap-4 w-full" direction="column">
            <Heading as="h4" className="capitalize">
              {item.heading}
            </Heading>
            <p>{item.description}</p>
          </Flex>
        </RadioCardsRadix.Item>
      ))}
    </RadioCardsRadix.Root>
  );
};
