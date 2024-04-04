import type { Metadata } from "next";
import { Inter, Roboto, Prompt } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

const prompt = Prompt({ subsets: ["latin"], style: ["normal"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Next-Auth",
  description: "Next-auth website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={prompt.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
