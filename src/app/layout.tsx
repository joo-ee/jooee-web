import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

import { SiteConfig } from "#src/config";

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.url,
  authors: [{ name: SiteConfig.author.name }],
  referrer: "origin-when-cross-origin",
  creator: SiteConfig.author.name,
  publisher: SiteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="kr" suppressHydrationWarning>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}
