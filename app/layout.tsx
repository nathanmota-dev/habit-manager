import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciador de Hábitos",
  description: "Gerenciador de Hábito com Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`inter.className flex justify-center flex-col mt-10 bg-neutral-900`}>{children}</body>
    </html>
  );
}
