import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neumorphic Landing Page",
  description: "A modern neumorphic design landing page built with Next.js, Tailwind CSS and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
