import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { generateMetadata as generateSiteMetadata } from "@/lib/metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

// Root metadata for SEO
export const metadata: Metadata = generateSiteMetadata({
  title: "Home Loan in Indore, Burhanpur, Khandwa | DSA Services",
  description: "Home Loan DSA Services in Indore, Burhanpur & Khandwa. Professional home loan services with quick approvals, competitive rates from top banks. Home Loan, LAP, Mortgage Loan, Balance Transfer & Top-Up Loan.",
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
        className={`${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
