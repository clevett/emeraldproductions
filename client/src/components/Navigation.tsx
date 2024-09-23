import Image from "next/image";
import { TabNav } from "@radix-ui/themes";

import logo from "../imgs/logo.png";

export const Navigation = () => {
  return (
    <div className="px-2 py-2 flex flex-wrap md:flex-nowrap">
      <Image
        alt="Emerald Productions logo"
        className="scale-50 grow-0"
        src={logo}
      />
      <div className="grow self-center w-full">
        <TabNav.Root>
          <TabNav.Link href="#" active>
            About
          </TabNav.Link>
          <TabNav.Link href="/diceroller">TTRPG Tools</TabNav.Link>
          <TabNav.Link href="#">Vocabulary Builder</TabNav.Link>
        </TabNav.Root>
      </div>
    </div>
  );
};
