import type { Metadata } from "next";
import {
  Playfair_Display,
  Old_Standard_TT,
  Caveat,
  Kalam,
  Permanent_Marker,
} from "next/font/google";
import { masthead } from "./content";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

const body = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
});

const scrawl = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-scrawl",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
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
      <body
        className={`${display.variable} ${body.variable} ${hand.variable} ${scrawl.variable} ${marker.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
