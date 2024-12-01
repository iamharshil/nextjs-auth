import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.JS Auth",
  description: "Next.JS Auth using Nextjs 15 and react 19 without any third-party clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
