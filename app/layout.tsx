import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import Provider from "@/components/shared/Provider";
import { Toaster } from "@/components/ui/toaster";
import ModalLayout from "@/components/shared/modal/ModalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <ModalLayout />
          {children}
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
