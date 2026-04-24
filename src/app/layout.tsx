import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/tailwind.css";
import { CartProvider } from "../context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sf-pro",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "LuminaTech - Yenilikci Teknoloji Urunleri",
  description:
    "LuminaTech ile akilli saatler, kablosuz kulakliklar ve hoparlörlerle hayatini kolaylastir. Ucretsiz kargo, 30 gun iade garantisi.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} bg-background`}>
      <body className={`${inter.className} antialiased`}>
        <CartProvider>{children}</CartProvider>
</body>
    </html>
  );
}
