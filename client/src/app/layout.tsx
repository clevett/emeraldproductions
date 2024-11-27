import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";

import { Header, Contact } from "@/components";

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
            <Header />
            <main className="h-full w-full">{children}</main>
            <footer className="flex w-full py-4 px-6 flex-col">
              <Contact />
            </footer>
          </div>
        </Theme>
      </body>
    </html>
  );
}
