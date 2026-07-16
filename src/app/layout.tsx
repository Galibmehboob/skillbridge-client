import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SkillBridge",
    template: "%s | SkillBridge",
  },
  description:
    "SkillBridge helps learners discover and manage skill-based opportunities with a modern, production-ready experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html
  lang="en"
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
    <body className="min-h-full flex flex-col">
      <Navbar/>
  <Providers>
    {children}
  </Providers>
  <Footer/>
</body>
    </html>
  );
}
