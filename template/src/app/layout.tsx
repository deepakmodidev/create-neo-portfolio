import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/ui/smooth-scroll";
import ScrollToTop from "@/components/ui/scroll-to-top";
import GridPattern from "@/components/ui/grid-pattern";
import CustomCursor from "@/components/ui/custom-cursor";
import {
  BASE_URL,
  SOCIAL_LINKS,
  ABOUT_ME,
  USER_NAMES,
  EDUCATION,
} from "./constants/data";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: ABOUT_ME.name,
    template: `%s | ${ABOUT_ME.name}`,
  },
  description: `${ABOUT_ME.name} — ${ABOUT_ME.title} portfolio showcasing projects and skills in React, Next.js, TypeScript, Node.js, and more. Based in ${ABOUT_ME.location}. Available for freelance and full-time opportunities.`,
  keywords: [
    ABOUT_ME.name,
    ABOUT_ME.title,
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: ABOUT_ME.name }],
  creator: ABOUT_ME.name,
  publisher: ABOUT_ME.name,
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: ABOUT_ME.name,
    description: `${ABOUT_ME.name}'s personal portfolio showcasing development skills, projects, and professional experience.`,
    siteName: ABOUT_ME.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${ABOUT_ME.name} - Portfolio Website`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_ME.name,
    description: `${ABOUT_ME.name}'s personal portfolio showcasing development skills, projects, and professional experience.`,
    creator: `@${USER_NAMES.twitterUsername}`,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={bricolage.variable}
      suppressHydrationWarning
      style={{ colorScheme: "dark light" }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* External Resources Preconnect */}
        <link rel="preconnect" href="https://skillicons.dev" />
        <link rel="dns-prefetch" href="https://skillicons.dev" />
        <link
          rel="preconnect"
          href="https://github-contributions-api.jogruber.de"
        />
        <link rel="preconnect" href="https://app.cal.com" />

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: ABOUT_ME.name,
                url: BASE_URL,
                jobTitle: ABOUT_ME.title,
                description: `${ABOUT_ME.name} is a ${ABOUT_ME.title} specializing in modern web applications built with Next.js and TypeScript.`,
                image: `${BASE_URL}${ABOUT_ME.profileImage}`,
                alumniOf: EDUCATION.map((edu) => ({
                  "@type": "CollegeOrUniversity",
                  name: edu.institution,
                  sameAs: edu.institutionLink,
                })),
                knowsAbout: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "Full Stack Development",
                  "Web Development",
                  "Tailwind CSS",
                ],
                sameAs: [
                  SOCIAL_LINKS.github,
                  SOCIAL_LINKS.linkedin,
                  SOCIAL_LINKS.twitter,
                  SOCIAL_LINKS.instagram,
                  SOCIAL_LINKS.peerlist,
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: ABOUT_ME.name,
                url: BASE_URL,
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${bricolage.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <GridPattern />
          <CustomCursor />
          <ScrollToTop />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
