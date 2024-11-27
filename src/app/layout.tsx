import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";

import { NavigationMenu, Contact } from "@/components";

import Link from "next/link";
import Image from "next/image";

import logo from "@/images/logo.png";

import "./globals.css";

export const metadata: Metadata = {
  title: "Emerald Productions",
  description: "Creating table top role playing software and tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-w-[375px]`}>
        <Theme appearance="dark">
          <div className="grid grid-rows-[auto_1fr_auto] h-full w-full min-h-dvh gap-4">
            <header className="flex flex-wrap gap-4 py-4 sm:py-6 justify-center xl:flex-nowrap relative">
              <div className="xl:min-w-60 sm:absolute left-0 top-0">
                <Link href="/">
                  <Image
                    alt="Emerald Productions logo"
                    className="scale-70 grow-0 "
                    src={logo}
                    priority
                    height={84}
                    width={200}
                  />
                </Link>
              </div>
              <NavigationMenu />
            </header>
            <main className="h-full w-full py-2 px-4 sm:px-6">{children}</main>
            <footer className="flex w-full py-4 sm:py-6 flex-col text-center">
              <i>Emerald Productions, LLC 2024</i>
            </footer>
          </div>
        </Theme>
      </body>
    </html>
  );
}
