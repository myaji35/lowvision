import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { SkipToMain } from "@/components/accessibility/SkipToMain";
import { AxeReporter } from "@/components/accessibility/AxeReporter";
import { commonMetadata } from "@/components/seo/CommonMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = commonMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AxeReporter />
        <SkipToMain />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 한국저시력인협회. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
