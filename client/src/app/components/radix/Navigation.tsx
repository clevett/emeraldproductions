import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import styles from "./Navigation.module.css";

import { rpgTools, Link as LinkType } from "@/app/resources";
import Link from "next/link";
import Image from "next/image";

const ListItem = ({ item }: { item: LinkType }) => {
  const { label, path, icon } = item;
  const href = `/tools${path}`;

  return (
    <DropdownMenu.Item key={path} className={styles.DropdownMenuItem}>
      <Link
        className={`grid grid-flow-col gap-2 auto-cols-max items-center`}
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
      <DropdownMenu.Trigger asChild className={styles.trigger}>
        <button className={styles.IconButton} aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`text-left py-2 px-5 rounded bg-neutral-900 ${styles.DropdownMenuContent}`}
          sideOffset={5}
        >
          {rpgTools.map(({ label, list }) => {
            return (
              <DropdownMenu.Group
                className={`${styles.DropdownMenuGroup}`}
                key={label}
              >
                <DropdownMenu.Item className={`${styles.DropdownHeader}`}>
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
