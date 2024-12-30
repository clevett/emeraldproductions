import Link from "next/link";
import Image from "next/image";

import { MenuSection, Link as LinkType } from "@/types";
import { Heading } from "@/components";

const hoverStyle = "hover:bg-card hover:text-sky-500";

const MenuItem = ({ label, path, icon }: LinkType) => {
  return (
    <li className="ml-1" key={`nav-tool-${label}`}>
      <Link
        className={`grid grid-flow-col grid-cols-[auto_1fr] auto-cols-min gap-2 ${hoverStyle}`}
        href={`${path}`}
      >
        {icon && <Image src={icon} alt="" width={24} height={24} />}
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {label}
        </span>
      </Link>
    </li>
  );
};

export const NavigationMenuSection = ({
  section,
}: {
  section: MenuSection[];
}) => {
  return (
    <div className="grid gap-2 sm:gap-4 auto-rows-min overflow-hidden gap-x-2.5 p-4 min-w-60">
      {section.map(({ label, list }: MenuSection) => (
        <div key={`nav-ul-${label.replace(/ /g, "_")}`} className="grid gap-2">
          <Heading as="h2" className="font-medium text-sky-500" size="2">
            {label}
          </Heading>
          <menu className="grid gap-2">
            {list.map((e: LinkType) => MenuItem(e))}
          </menu>
        </div>
      ))}
    </div>
  );
};
