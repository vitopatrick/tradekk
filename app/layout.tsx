"use client";

import { useChat } from "@/hooks/useChat";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useChat();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
