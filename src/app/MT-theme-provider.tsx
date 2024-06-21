"use client";

import { ThemeProvider } from "@material-tailwind/react";

export function MTThemeProvider({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
