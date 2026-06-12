import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Line Coffee V2",
  description: "Line Coffee V2 application foundation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
