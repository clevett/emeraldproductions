import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Contact } from "./components/Contact";
import { Header } from "@/app/components/Header";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";
import type { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-[375px]`}
      >
        <Theme appearance="dark">
          <div className="grid grid-rows-[auto_1fr_auto] h-full w-full min-h-dvh">
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
