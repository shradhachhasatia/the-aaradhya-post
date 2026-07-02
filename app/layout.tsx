import type { Metadata } from "next";
import { Playfair_Display, Old_Standard_TT, Archivo_Black, Inter } from "next/font/google";
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

const grotesk = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-grotesk",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
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
        className={`${display.variable} ${body.variable} ${grotesk.variable} ${sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
