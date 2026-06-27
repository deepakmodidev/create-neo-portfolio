import React from "react";
import Navbar from "@/components/sections/navbar";
import Banner from "@/components/sections/banner";
import Profile from "@/components/sections/profile";
import AboutMe from "@/components/sections/about-me";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/testimonials";
import SectionSeparator from "@/components/ui/section-separator";

export default function Home() {
  // Define sections in order for automated rendering
  const sections = [
    <Navbar key="navbar" />,
    <Banner key="banner" />,
    <Profile key="profile" />,
    <AboutMe key="about" />,
    <Experience key="experience" />,
    <Education key="education" />,
    <Projects key="projects" />,
    <Skills key="skills" />,
    <Testimonials key="testimonials" />,
    <Contact key="contact" />,
    <Footer key="footer" />,
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative px-2">
      <main className="relative z-10 max-w-3xl w-full mx-auto border-x border-dashed border-border bg-background">
        {/* Initial Top Separator */}
        <SectionSeparator />

        {/* Declarative Section Mapping */}
        {sections.map((section) => (
          <React.Fragment key={section.key}>
            {section}
            <SectionSeparator />
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
