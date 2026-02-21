import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertex Media — Marketing Digital Timișoara | Prețuri Transparente",
  description:
    "Singura agenție din Timișoara cu prețuri afișate public. Social media, Google Ads, SEO — pachete de la 1.999 RON/lună. Fără surprize.",
  keywords: "agenție marketing digital Timișoara, social media management, Google Ads, SEO, prețuri transparente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#FFFFFF", color: "#111827" }}
      >
        {children}
      </body>
    </html>
  );
}
