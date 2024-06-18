import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lulo | Save Different",
  description:
    "Lulo maximizes your lending rates and saves you time. It finds the best interest rates by checking different lending dApps on the Solana network and automatically moves your funds for you. Users get the best rate without any hassle or manual workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
