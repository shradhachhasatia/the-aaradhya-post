import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import { masthead } from "./content";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: masthead.title,
  description: masthead.motto,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} ${hand.variable}`}>{children}</body>
    </html>
  );
}
