import type { Metadata } from "next";
import { Inter, Outfit, Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import { generateMetadata as generateSiteMetadata } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

// Root metadata for SEO
export const metadata: Metadata = generateSiteMetadata({
  title: "Home Loan Financial Services",
  description: "Professional home loan services and financial solutions for your dream home. Get competitive rates, expert advice, and fast approval.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${poppins.variable} ${urbanist.variable} font-sans antialiased`}
        suppressHydrationWarning
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
