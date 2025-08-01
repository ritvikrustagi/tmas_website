import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import StructuredData from "@/components/ui-custom/StructuredData";
import GoogleAnalytics from "@/components/ui-custom/GoogleAnalytics";
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
  description: "Download FREE AP STEM and competitive math study guides! 500+ students used our materials with several students achieving 5s on AP exams and success in contests like the AMC 10/12 and AIME. AP Calculus, Physics, Chemistry, Biology, Statistics, and more!",
  keywords: [
    "free AP books download",
    "AP Calculus AB prep book PDF", 
    "AP Physics 1 study guide free",
    "AMC 10 AMC 12 practice problems",
    "AIME qualification prep",
    "AP Chemistry review book",
    "free educational resources",
    "AP exam study materials",
    "math competition preparation",
    "Ritvik Rustagi books",
    "TMAS Academy",
    "Carnegie Mellon student",
    "AP score 5 guaranteed"
  ].join(", "),
  authors: [{ name: "Ritvik Rustagi", url: "https://tmasacademy.com/about" }, { name: "TMAS Academy" }],
  creator: "TMAS Academy",
  publisher: "TMAS Academy",
  category: "Education",
  classification: "Educational Resources",
  applicationName: "TMAS Academy",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    title: "TMAS Academy - FREE AP Books & Math Competition Prep",
    description: "Download FREE AP STEM and competitive math study guides! 500+ students used our materials with several students achieving 5s on AP exams and success in contests like the AMC 10/12 and AIME. AP Calculus, Physics, Chemistry, Biology, Statistics, and more!",
    url: "https://tmasacademy.com",
    siteName: "TMAS Academy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://tmasacademy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "TMAS Academy - Free AP Books and Math Competition Prep",
        type: "image/png",
      }
    ],
    videos: [
      {
        url: "https://youtube.com/@tmasacademy",
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TMAS Academy - FREE AP Books & Math Competition Prep",
    description: "Download FREE AP STEM and competitive math study guides! 500+ students used our materials with several students achieving 5s on AP exams and success in contests like the AMC 10/12 and AIME. AP Calculus, Physics, Chemistry, Biology, Statistics, and more!",
    images: ["https://tmasacademy.com/og-image.png"],
    creator: "@tmasacademy",
    site: "@tmasacademy",
  },
  alternates: {
    canonical: "https://tmasacademy.com",
    languages: {
      'en-US': 'https://tmasacademy.com',
    },
  },
  bookmarks: ['https://tmasacademy.com/books'],
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
        <GoogleAnalytics />
        <StructuredData type="organization" data={{}} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
