import { Link } from "@radix-ui/themes";

import { contacts } from "@/app/resources";

export const Contact = () => {
  return (
    <div className="flex self-end gap-4">
      {contacts.map(({ src, name, href }) => (
        <Link
          aria-label={name}
          color="gray"
          highContrast
          href={href}
          key={`${name}`}
          target="_blank"
        >
          {src}
        </Link>
      ))}
    </div>
  );
};
