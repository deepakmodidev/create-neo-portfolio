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
  metadataBase: new URL("https://create-neo-portfolio.vercel.app"),
  title: "Neo Portfolio – Create Your Portfolio in 120 Seconds",
  description:
    "A CLI tool that instantly creates modern, responsive portfolios with Next.js, Tailwind CSS, and TypeScript. From zero to live in 120 seconds—minimal setup, maximum impact.",
  keywords:
    "portfolio generator, CLI tool, Next.js portfolio, developer portfolio, Tailwind CSS, TypeScript, responsive portfolio, portfolio builder, portfolio template, modern portfolio, web developer portfolio, portfolio CLI, instant portfolio, portfolio maker",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Neo Portfolio – Create Your Portfolio in 120 Seconds",
    description:
      "From zero to live in 120 seconds. Generate a stunning, responsive portfolio with Next.js, Tailwind CSS, and TypeScript using one CLI command.",
    url: "https://create-neo-portfolio.vercel.app",
    siteName: "Neo Portfolio",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Neo Portfolio – Create Your Portfolio in 120 Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Portfolio – Create Your Portfolio in 120 Seconds",
    description:
      "npx and done! Create a modern, responsive portfolio with Next.js, Tailwind CSS, and TypeScript. Minimal setup, maximum impact.",
    images: ["/banner.png"],
    creator: "@deepakmodidev",
  },
  alternates: {
    canonical: "https://create-neo-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
