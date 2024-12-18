import React from "react";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

import { navigation, rpgTools, games } from "@/resources";
import { Heading } from "./Heading";

const focusShadow = "focus:shadow-[0_0_0_2px] focus:shadow-blue-700";
const hoverStyle = "hover:bg-card hover:text-sky-500";

export const NavigationMenu = () => {
  const { about, tools, games: NavGames } = navigation;

  const listStyle = `block select-none rounded px-3 py-2 font-medium leading-none outline-none ${hoverStyle} ${focusShadow}`;

  return (
    <RadixNavigationMenu.Root className="relative z-10 flex sm:w-screen justify-center">
      <RadixNavigationMenu.List className="center m-0 flex list-none rounded-md p-1 shadow shadow-white">
        <RadixNavigationMenu.Item>
          <Link href={about.path} className={listStyle}>
            {about.label}
          </Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Trigger
            className={`group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none ${hoverStyle} ${focusShadow}`}
          >
            {tools.label}
            <CaretDownIcon
              className={`relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180`}
              aria-hidden
            />
          </RadixNavigationMenu.Trigger>

          <RadixNavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <div className="grid gap-2 sm:gap-4 auto-rows-min overflow-hidden gap-x-2.5 p-4 min-w-60">
              {rpgTools.map(({ label: system, list }) => (
                <div
                  key={`nav-ul-${system.replace(/ /g, "_")}`}
                  className="grid gap-2"
                >
                  <Heading
                    as="h2"
                    className="font-medium text-sky-500"
                    size="2"
                  >
                    {system}
                  </Heading>
                  <menu className="grid gap-2">
                    {list.map(({ label, path, icon }) => (
                      <li className={`ml-1`} key={`nav-tool-${label}`}>
                        <Link
                          className={`grid grid-flow-col grid-cols-[auto_1fr] auto-cols-min gap-2 ${hoverStyle}`}
                          href={`${path}`}
                        >
                          {icon && (
                            <Image src={icon} alt="" width={24} height={24} />
                          )}
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </menu>
                </div>
              ))}
            </div>
          </RadixNavigationMenu.Content>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Trigger
            className={`group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none ${hoverStyle} ${focusShadow}`}
          >
            {NavGames.label}
            <CaretDownIcon
              className={`relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180`}
              aria-hidden
            />
          </RadixNavigationMenu.Trigger>

          {games.map(({ label, path, description }) => (
            <RadixNavigationMenu.Content
              key={`nav-menu-${path}`}
              className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto"
            >
              <menu className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem title={label} href={path}>
                  {description}
                </ListItem>
              </menu>
            </RadixNavigationMenu.Content>
          ))}
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-card" />
        </RadixNavigationMenu.Indicator>
      </RadixNavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <RadixNavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-card transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </RadixNavigationMenu.Root>
  );
};
interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <RadixNavigationMenu.Link asChild>
        <a
          className={`block select-none rounded-md p-3 leading-none outline-none transition-colors ${hoverStyle} ${focusShadow} ${className}`}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-sky-500">
            {title}
          </div>
          <p className="leading-[1.4]">{children}</p>
        </a>
      </RadixNavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";
