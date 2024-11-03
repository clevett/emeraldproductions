import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import "./styles.css";

import { rpgTools, Link as LinkType } from "@/app/resources";
import Link from "next/link";
import Image from "next/image";

const ListItem = ({ item }: { item: LinkType }) => {
  const { label, path, icon } = item;
  const href = `/tools${path}`;

  return (
    <DropdownMenu.Item key={path} className="DropdownMenuItem">
      <Link
        className={`grid grid-flow-col gap-2`}
        href={href}
        key={`sidebar-${path}`}
      >
        {icon && <Image src={icon} alt="" width={24} height={24} />}
        <span>{label}</span>
      </Link>
    </DropdownMenu.Item>
  );
};

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {rpgTools.map(({ label, list }) => {
            return (
              <DropdownMenu.Group key={label} className="DropdownMenuGroup">
                <DropdownMenu.Item className="DropdownMenuItem">
                  {label}
                </DropdownMenu.Item>
                {list.map((item) => (
                  <ListItem key={item.path} item={item} />
                ))}
              </DropdownMenu.Group>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
