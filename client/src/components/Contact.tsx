import Image from "next/image";
import { Link } from "@radix-ui/themes";

import github from "../imgs/GitHub-Icon.png";
import linkedIn from "../imgs/LinkedIN-Icon.png";

export const contacts = [
  {
    name: "GitHub",
    src: github,
    href: "https://github.com/clevett",
    alt: "github logo is silhouette of an octapus cat hybrid",
  },
  {
    name: "LinkedIN",
    src: linkedIn,
    href: "https://www.linkedin.com/in/jackson-levett-65029818/",
    alt: 'linked in logo of letters "i" "n" inside a box',
  },
];

export const Contact = () => {
  return (
    <div className="flex self-end gap-4">
      {contacts.map(({ src, name, href, alt }) => (
        <Link href={href} key={`${name}`} target="_blank">
          <Image height={24} width={24} alt={alt} src={src} />
        </Link>
      ))}
    </div>
  );
};
