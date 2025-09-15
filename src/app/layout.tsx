import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Performing Arts Academy",
  description: "AI-Powered Educational Platform for Music Lessons and Performance Arts",
  keywords: "music lessons, piano, guitar, singing, performance arts, academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
