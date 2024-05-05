import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./FlipBook.css"
import Hydration from "@/store/hydration";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Music",
  description: "Baby Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-bl from-indigo-400 to-sky-400`}>
        <Hydration />
        {children}
        </body>
    </html>
  );
}
