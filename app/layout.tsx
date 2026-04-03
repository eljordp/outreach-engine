import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JDLO Outreach Engine",
  description: "Lead pipeline & outreach system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fafafa] text-[#141414]">{children}</body>
    </html>
  );
}
