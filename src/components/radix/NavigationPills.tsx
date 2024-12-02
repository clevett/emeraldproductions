import { Link as LinkType } from "@/types";
import {
  Flex,
  Link,
  SegmentedControl as RadixSegmentedControl,
} from "@radix-ui/themes";

export const NavigationPills = ({
  links,
  defaultValue,
}: {
  links: LinkType[];
  defaultValue: LinkType["path"];
}) => {
  return (
    <Flex align="start" direction="column" gap="4">
      <RadixSegmentedControl.Root defaultValue={defaultValue} radius="full">
        {links.map(({ path, label }) => (
          <RadixSegmentedControl.Item key={`nav-pill-${path}`} value={path}>
            <Link href={path}>{label}</Link>
          </RadixSegmentedControl.Item>
        ))}
      </RadixSegmentedControl.Root>
    </Flex>
  );
};
