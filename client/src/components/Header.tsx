"use client";

import { Link, navigation } from "@/resources";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { TabNav } from "@radix-ui/themes";
import DropdownMenuDemo from "./radix/Navigation";

import logo from "@/images/logo.png";

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
    <div className="flex flex-wrap gap-4 justify-center lg:flex-nowrap relative">
      <div className="lg:min-w-60">
        <Image
          alt="Emerald Productions logo"
          className="scale-70 grow-0 "
          src={logo}
          priority
          height={84}
          width={200}
        />
      </div>

      <div className="grow self-end w-full hidden lg:block lg:pr-6">
        <TabNav.Root highContrast>
          <NavLink {...about} isActive={pathname === about.path} />
          <NavLink {...tools} isActive={pathname === tools.path} />
          <NavLink {...games} isActive={pathname === games.path} />
        </TabNav.Root>
      </div>

      <div className="absolute top-1/2 left-[5%] lg:hidden ">
        <DropdownMenuDemo />
      </div>
    </div>
  );
};
