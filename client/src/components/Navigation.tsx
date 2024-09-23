"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { TabNav } from "@radix-ui/themes";

import logo from "../imgs/logo.png";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4">
      <Image
        alt="Emerald Productions logo"
        className="scale-70 grow-0"
        src={logo}
        priority
        height={84}
        width={200}
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
