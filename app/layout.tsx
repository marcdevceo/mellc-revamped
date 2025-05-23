import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MELLC",
  description:
    "A Leadership & Customer Experience Coach helping professionals and teams elevate performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-yellow-500 text-zinc-900 flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
          <NavBar />
          <div className="mt-44 sm:mt-60">{children}</div>
        </div>
      </body>
    </html>
  );
}
