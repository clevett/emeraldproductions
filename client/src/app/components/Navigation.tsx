"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { TabNav } from "@radix-ui/themes";

import logo from "../imgs/logo.png";

import { navigation, Link } from "@/app/resources";

const NavLink = ({ path, label, isActive }: Link & { isActive: boolean }) => {
  return (
    <TabNav.Link href={path} active={isActive}>
      {label}
    </TabNav.Link>
  );
};

export const Navigation = () => {
  const { about, tools, games } = navigation;
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
          <NavLink {...about} isActive={pathname === about.path} />
          <NavLink {...tools} isActive={pathname === tools.path} />
          <NavLink {...games} isActive={pathname === games.path} />
        </TabNav.Root>
      </div>
    </div>
  );
};
