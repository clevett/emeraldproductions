import { TabNav } from "@radix-ui/themes";

export const Navigation = () => {
  return (
    <div className="px-2 py-4">
      <TabNav.Root>
        <TabNav.Link href="#" active>
          About
        </TabNav.Link>
        <TabNav.Link href="#">TTRPG Tools</TabNav.Link>
        <TabNav.Link href="#">Vocabulary Builder</TabNav.Link>
      </TabNav.Root>
    </div>
  );
};
