import { Select as RadixSelect } from "@radix-ui/themes";

export const Select = ({
  defaultValue,
  list,
  onChange,
  title,
  styles,
}: {
  defaultValue: string;
  list: string[];
  onChange: (item: string) => void;
  title: string;
  styles?: string;
}) => {
  return (
    <RadixSelect.Root defaultValue={defaultValue} onValueChange={onChange}>
      <RadixSelect.Trigger />
      <RadixSelect.Content className={styles ?? ""}>
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
