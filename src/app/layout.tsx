import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { MTThemeProvider } from "src/app/MT-theme-provider";
import { AppNavbar } from "./app-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tune Vault",
  description: "Effortlessly play music on your favorite Discord server!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] text-blue-gray-100 from-blue-700 via-blue-800 to-gray-900 h-screen flex flex-col items-center">
  return (
    <MTThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-gray-900 via-blue-gray-900 to-gray-900 text-blue-gray-100 h-screen flex flex-col items-center">
            <AppNavbar />
            <div className="h-[calc(100vh-72px)]">{children}</div>
          </div>
        </body>
      </html>
    </MTThemeProvider>
  );
}
