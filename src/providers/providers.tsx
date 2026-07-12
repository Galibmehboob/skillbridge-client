"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";

import ThemeProvider from "./theme-provider";
import QueryProvider from "./query-provider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        {children}

        <Toaster
          position="top-right"
          richColors
          closeButton
          expand={false}
          duration={3000}
        />
      </QueryProvider>
    </ThemeProvider>
  );
}