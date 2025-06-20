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
  title: "TMAS Academy - Free AP Books & Math Competition Prep",
  description: "TMAS Academy provides high-quality, free educational resources for AP exams and math competitions like AMC 10/12 & AIME. Download our comprehensive books and join our supportive community.",
  keywords: "AP Calculus, AP Physics, AMC 10, AMC 12, AIME, math competition, free books, education, TMAS Academy",
  authors: [{ name: "Ritvik Rustagi" }, { name: "TMAS Academy" }],
  creator: "TMAS Academy",
  publisher: "TMAS Academy",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.svg"
  },
  openGraph: {
    title: "TMAS Academy - Free AP Books & Math Competition Prep",
    description: "High-quality, free educational resources for AP exams and math competitions.",
    url: "https://tmasacademy.com",
    siteName: "TMAS Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TMAS Academy - Free AP Books & Math Competition Prep",
    description: "High-quality, free educational resources for AP exams and math competitions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
