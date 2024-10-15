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
      <ul className="grid gap-2">{getList(list)}</ul>
    </>
  );
};

export const ListItem = ({ item }: { item: LinkType }) => {
  const pathname = usePathname();
  const { label, path, icon } = item;

  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <Link href={`/tools/${path}`} key={`sidebar-${path}`}>
      <li className={`grid grid-flow-col auto-cols-max gap-2 ml-2 ${isActive}`}>
        {icon && <Image src={icon} alt={label} width={24} height={24} />}
        <Text>{label}</Text>
      </li>
    </Link>
  );
};
