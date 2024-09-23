"use client";
import { Heading, Separator, Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { ftdList, sotdlList, shadowrunList, myzList, tools } from "./routes";

export const Sidebar = () => {
  return (
    <div className="grid gap-4 px-4">
      <div className="border-b-2 w-full">
        <Heading size="4">RPG Tools</Heading>
      </div>

      <List title="General" list={tools} />
      <List title="Five Torches Deep" list={ftdList} />
      <List title="Mutant Year Zero" list={myzList} />
      <List title="Shadow of the Demon Lord" list={sotdlList} />
      <List title="Shadowrun" list={shadowrunList} />
    </div>
  );
};

export const List = ({
  title,
  list,
}: {
  title: string;
  list: typeof ftdList;
}) => {
  const getList = (list: typeof ftdList) =>
    list.map((e: (typeof ftdList)[0]) => <ListItem key={e.path} item={e} />);

  return (
    <>
      <Heading as="h2" size="2">
        {title}
      </Heading>
      <ul className="grid gap-2">{getList(list)}</ul>
    </>
  );
};

export const ListItem = ({ item }: { item: (typeof ftdList)[0] }) => {
  const pathname = usePathname();
  const { label, path, iconType } = item;

  //const isActive = (path: string) =>  pathname === path ? "active" : "";

  return (
    <Link href={path} key={`sidebar-${path}`}>
      <li className="grid grid-flow-col auto-cols-max gap-2 ml-2">
        <Image src={iconType} alt={label} width={24} height={24} />
        <Text>{label}</Text>
      </li>
      {/* <EuiListGroupItem
        iconType={iconType}
        isActive={pathname === path}
        label={label}
      >
        {label}
      </EuiListGroupItem> */}
    </Link>
  );
};

// <Link
//   className="inline-flex"
//   href={driveThru(id)}
//   rel="noopener noreferrer"
//   target="_blank"
// >
//   {children}
// </Link>;
