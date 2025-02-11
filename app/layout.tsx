import { inter } from "./ui/fonts";
import "./ui/global.css";
import { Metadata } from "next";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Notes Tab",
  description: "Create notes in a simplified way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
