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
          <div className="grid grid-rows-[auto_1fr_auto] h-full w-full min-h-dvh gap-4 overflow-hidden">
            <header className="flex flex-wrap gap-4 py-2 px-4 sm:px-6 justify-center relative sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <div className="z-10 sm:col-start-1 sm:col-end-1 sm:row-start-1 xl:min-w-60">
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
              <div className="sm:col-start-1 sm:col-end-3 sm:row-start-1">
                <NavigationMenu />
              </div>
              <div className="absolute left-4 top-12 z-10 sm:top-0 sm:left-0 sm:relative sm:block sm:col-start-3 sm:col-end-3 sm:row-start-1 sm:justify-self-end">
                <Contact />
              </div>
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
