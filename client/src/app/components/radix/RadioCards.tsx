import { Flex, RadioCards as RadioCardsRadix } from "@radix-ui/themes";
import { Heading } from "./Heading";

export const RadioCards = ({
  list,
  defaultValue,
  columns = "3",
  onChange,
  className,
}: {
  columns?: string;
  defaultValue: string;
  list: { heading: string; description: string }[];
  onChange: (value: string) => void;
  className?: string;
}) => {
  return (
    <RadioCardsRadix.Root
      columns={{ initial: defaultValue, sm: columns }}
      defaultValue={defaultValue}
      highContrast
      onValueChange={(value) => onChange(value)}
      className={className}
    >
      {list.map((item, index) => (
        <RadioCardsRadix.Item key={index} value={item.heading}>
          <Flex className="gap-4 w-full" direction="column">
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
