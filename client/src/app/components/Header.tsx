"use client";

import { Link, navigation } from "@/app/resources";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { TabNav } from "@radix-ui/themes";

import logo from "../imgs/logo.png";

const NavLink = ({ path, label, isActive }: Link & { isActive: boolean }) => {
  return (
    <TabNav.Link href={path} active={isActive}>
      {label}
    </TabNav.Link>
  );
};

export const Header = () => {
  const { about, tools, games } = navigation;
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap">
      <Image
        alt="Emerald Productions logo"
        className="scale-70 grow-0"
        src={logo}
        priority
        height={84}
        width={200}
      />
      <div className="grow self-center w-full">
        <TabNav.Root highContrast>
          <NavLink {...about} isActive={pathname === about.path} />
          <NavLink {...tools} isActive={pathname === tools.path} />
          <NavLink {...games} isActive={pathname === games.path} />
        </TabNav.Root>
        {/* <Navigation /> */}
      </div>
    </div>
  );
};
