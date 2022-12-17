import { EuiLink, EuiIcon } from "@elastic/eui";
import discord from "../imgs/Discord-Icon.png";
import github from "../imgs/GitHub-Icon.png";
import linkedIn from "../imgs/LinkedIN-Icon.png";
export const contacts = [
  {
    name: "GitHub",
    src: github,
    href: "https://github.com/clevett",
    alt: "silhouette of an octapus cat hybrid",
  },
  {
    name: "Necoya #7621",
    src: discord,
    alt: "discord robot eyes in a chat bubble",
  },
  {
    name: "LinkedIN",
    src: linkedIn,
    href: "https://www.linkedin.com/in/cassie-levett-65029818/",
    alt: 'letters "i" "n" inside a box',
  },
];

export const ContactOptions = contacts.map((c, index) => (
  <EuiLink href={c.href} key={`contacts-${index}`} className="mr-6">
    <EuiIcon type={c.src} size="l" />
  </EuiLink>
));
