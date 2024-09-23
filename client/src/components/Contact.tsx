import { Link } from "@radix-ui/themes";

import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export const contacts = [
  {
    name: "GitHub",
    src: <GitHubLogoIcon height={24} width={24} />,
    href: "https://github.com/clevett",
    alt: "github logo is silhouette of an octapus cat hybrid",
  },
  {
    name: "LinkedIN",
    src: <LinkedInLogoIcon height={24} width={24} />,
    href: "https://www.linkedin.com/in/jackson-levett-65029818/",
    alt: 'linked in logo of letters "i" "n" inside a box',
  },
];

export const Contact = () => {
  return (
    <div className="flex self-end gap-4">
      {contacts.map(({ src, name, href }) => (
        <Link
          href={href}
          key={`${name}`}
          target="_blank"
          color="gray"
          highContrast
        >
          {src}
        </Link>
      ))}
    </div>
  );
};
