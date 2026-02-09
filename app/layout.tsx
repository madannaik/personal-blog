import React from "react";
import type { Metadata } from "next";
import { Lora, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "the html blog",
  description: "A blog with the raw aesthetic of early HTML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${ibmPlexMono.variable} font-serif antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
