"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { TabNav } from "@radix-ui/themes";

import logo from "../imgs/logo.png";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="px-2 py-2 flex flex-wrap md:flex-nowrap">
      <Image
        alt="Emerald Productions logo"
        className="scale-50 grow-0"
        src={logo}
        priority
      />
      <div className="grow self-center w-full">
        <TabNav.Root>
          <TabNav.Link href="/" active={pathname === "/"}>
            About
          </TabNav.Link>
          <TabNav.Link href="/diceroller" active={pathname === "/diceroller"}>
            TTRPG Tools
          </TabNav.Link>
          <TabNav.Link href="/games" active={pathname === "/games"}>
            Vocabulary Builder
          </TabNav.Link>
        </TabNav.Root>
      </div>
    </div>
  );
};
