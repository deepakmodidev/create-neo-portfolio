import type { Metadata, Viewport } from "next";
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
  title: "Neo Portfolio - a developer portfolio in one command",
  description:
    "create-neo-portfolio is a CLI that scaffolds a clean, responsive developer portfolio with Next.js, Tailwind CSS, and TypeScript. Edit one file and deploy - no config.",
  keywords:
    "portfolio generator, CLI tool, Next.js portfolio, developer portfolio, Tailwind CSS, TypeScript, responsive portfolio, portfolio builder, portfolio template, modern portfolio, web developer portfolio, portfolio CLI, instant portfolio, portfolio maker",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Neo Portfolio - a developer portfolio in one command",
    description:
      "Scaffold a clean, responsive developer portfolio with Next.js, Tailwind CSS, and TypeScript. Edit one file and deploy.",
    url: "https://create-neo-portfolio.vercel.app",
    siteName: "Neo Portfolio",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Neo Portfolio - a developer portfolio in one command",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Portfolio - a developer portfolio in one command",
    description:
      "npx and done. A clean, responsive portfolio with Next.js, Tailwind CSS, and TypeScript.",
    images: ["/banner.png"],
    creator: "@deepakmodidev",
  },
  alternates: { canonical: "https://create-neo-portfolio.vercel.app" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Set the theme class before paint to avoid a flash of the wrong theme.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      style={{ colorScheme: "dark light" }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
