import React from "react";

import LenisProvider from "../components/ui/lenis-provider";
import GridPattern from "../components/ui/grid-pattern";
import SectionSeparator from "../components/ui/section-separator";

import Header from "../components/sections/header";
import Hero from "../components/sections/hero-section";
import Features from "../components/sections/features-section";
import GetStarted from "../components/sections/get-started";
import WhatsInside from "../components/sections/dependencies";
import CTASection from "../components/sections/cta-section";
import Footer from "../components/sections/footer";

export default function Home() {
  const sections = [
    <Hero key="hero" />,
    <Features key="features" />,
    <GetStarted key="get-started" />,
    <WhatsInside key="inside" />,
    <CTASection key="cta" />,
    <Footer key="footer" />,
  ];

  return (
    <>
      <LenisProvider />
      <GridPattern />

      <div className="relative flex min-h-screen flex-col items-center px-2">
        <main className="relative z-10 mx-auto w-full max-w-3xl border-x border-dashed border-border bg-background">
          <Header />

          {sections.map((section) => (
            <React.Fragment key={section.key}>
              {section}
              <SectionSeparator />
            </React.Fragment>
          ))}
        </main>
      </div>
    </>
  );
}
