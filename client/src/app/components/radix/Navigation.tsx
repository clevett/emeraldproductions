"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { navigation, contacts } from "@/app/resources";
import { usePathname } from "next/navigation";

import styles from "./Navigation.module.css";
import React from "react";

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  title: string;
}

export const Navigation = () => {
  const { about, tools, games } = navigation;
  const pathname = usePathname();

  const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, children, title, ...props }, forwardedRef) => (
      <li>
        <NavigationMenu.Link asChild>
          <a
            className={`${styles.ListItemLink} ${className ?? ""}`}
            {...props}
            ref={forwardedRef}
          >
            <div className={styles.ListItemHeading}>{title}</div>
            <p className={styles.ListItemText}>{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    )
  );

  ListItem.displayName = styles.ListItem;

  return (
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <NavigationMenu.List className={`${styles.NavigationMenuList} shadow-md`}>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={styles.NavigationMenuLink}
            href={about.path}
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.NavigationMenuTrigger}>
            TTRPG Tools
            <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.NavigationMenuContent}>
            <ul className="List two">
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              {/* <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem> */}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {contacts.map(({ src, name, href }) => (
          <NavigationMenu.Item key={`contact-${name}`}>
            <NavigationMenu.Link
              className={styles.NavigationMenuLink}
              href={href}
              target="_blank"
            >
              {src}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
        <NavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
};
