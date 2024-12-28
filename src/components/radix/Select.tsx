import { Select as RadixSelect } from "@radix-ui/themes";

export const Select = ({
  className,
  defaultValue,
  list,
  onChange,
  title,
}: {
  className?: string;
  defaultValue: string;
  list: string[];
  onChange: (item: string) => void;
  title: string;
}) => {
  return (
    <RadixSelect.Root defaultValue={defaultValue} onValueChange={onChange}>
      <RadixSelect.Trigger className="capitalize" placeholder={title} />
      <RadixSelect.Content className={`capitalize ${className ?? ""}`}>
        <RadixSelect.Group>
          <RadixSelect.Label>{title}</RadixSelect.Label>
          {list.map((name) => (
            <RadixSelect.Item key={name} value={name}>
              {name}
            </RadixSelect.Item>
          ))}
        </RadixSelect.Group>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};
