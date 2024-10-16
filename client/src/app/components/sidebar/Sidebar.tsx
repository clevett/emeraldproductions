"use client";
import { Heading, Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "./Sidebar.module.css";

import { rpgTools, Link as LinkType } from "@/app/resources";

type List = LinkType[];
export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className="border-b w-full">
        <Heading size="4">RPG Tools</Heading>
      </div>

      {rpgTools.map(({ label, list }) => (
        <List
          key={`${label.replace(/ /g, "_")}-sidebar-list`}
          title={label}
          list={list}
        />
      ))}
    </div>
  );
};

export const List = ({ title, list }: { title: string; list: List }) => {
  const getList = (list: List) =>
    list.map((e: LinkType) => <ListItem key={e.path} item={e} />);

  return (
    <>
      <Heading as="h2" size="2">
        {title}
      </Heading>
      <menu className="grid gap-2">{getList(list)}</menu>
    </>
  );
};

export const ListItem = ({ item }: { item: LinkType }) => {
  const pathname = usePathname();
  const { label, path, icon } = item;
  const href = `/tools${path}`;

  const isActive = pathname === href ? styles.active : "";

  return (
    <li className={`ml-1 ${isActive}`}>
      <Link
        className={`grid grid-flow-col gap-2`}
        href={href}
        key={`sidebar-${path}`}
      >
        {icon && <Image src={icon} alt="" width={24} height={24} />}
        <Text>{label}</Text>
      </Link>
    </li>
  );
};
