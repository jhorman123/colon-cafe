import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COLON | Premium Cafe",
  description: "Experience the finest coffee and pastries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#121212] text-zinc-100 min-h-screen selection:bg-amber-500/30 selection:text-amber-200`}
      >
        <Navigation />
        {children}
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
